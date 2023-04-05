import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mySqlDb.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS newitems (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL);',//, imageUri TEXT NOT NULL
        
        [], // An array of data that can be inserted into the sql query, not used here
        () => {
          resolve();
        },
        (xx, err) => { // xx is the transaction id which we don't use
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertItem = (newItem) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            `INSERT INTO newitems (title) VALUES (?);`,
            //`INSERT INTO newitems (imageUri) VALUES (?);`,
            //DELETE __ FROM table_name WHERE condition;
            [newItem.title],  // An array of data that can be inserted into the swl query
            //[newItem.imageUri],  // An array of data that can be inserted into the swl query
            (xx, result) => { // xx is the transaction id which we don't use
              resolve(result);
            },
            (xx, err) => {
              reject(err);
            }
          );
        });
      });
      return promise;
};

export const deleteItem = (newItem) => {
  const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `DELETE FROM newitems WHERE title = (?)`,
          //;
          [newItem.title],  // An array of data that can be inserted into the swl query
          (xx, result) => { // xx is the transaction id which we don't use
            resolve(result);
          },
          (xx, err) => {
            reject(err);
          }
        );
      });
    });
    return promise;
};

export const fetchItems = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM newitems', // could add WHERE etc. 
            [],  // An array of data that can be inserted into the sql query, not used here
            (xx, result) => {
              resolve(result.rows._array);
            },
            (xx, err) => {
              reject(err);
            }
          );
        });
      });
      return promise;
};