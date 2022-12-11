import * as SQLite from 'expo-sqlite';

function openConnection(){
    const db = SQLite.openDatabase('db.db');
    return db;
}

export const db = openConnection();