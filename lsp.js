// Liskov substitution principle - Принцип подстановки Барбары Лисков
// Наследуемый класс должен дополнять, а не замещать поведение базового класса

// Базовый класс
class DataBase {
    connect(){}
    read(){}
    write(){}
}

// Класс для реляционных баз данных
class SQLDataBase extends DataBase {
    connect(){}
    read(){}
    write(){}
    joinTables(){}
}

// Класс для нереляционных баз данных
class NoSQLDataBase extends DataBase {
    connect(){}
    read(){}
    write(){}
    createIndex(){}
}

// MySQL
class MySQLDataBase extends SQLDataBase {
    connect(){}
    read(){}
    write(){}
    joinTables(){}
}

// MongoDB
class MongoDataBase extends NoSQLDataBase {
    connect(){}
    read(){}
    write(){}
    createIndex(){}
    mergeDocuments(){}
}

// Класс для подключения к базе данных
const connectDataBase = (db: DataBase) => {
    db.connect();
}

connectDataBase(new MySQLDataBase());
connectDataBase(new MongoDataBase());