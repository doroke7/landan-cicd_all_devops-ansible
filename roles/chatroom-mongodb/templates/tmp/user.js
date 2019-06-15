/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MongoDB
 Source Server Version : 40010
 Source Host           : 127.0.0.1:27017
 Source Schema         : chatroom

 Target Server Type    : MongoDB
 Target Server Version : 40010
 File Encoding         : 65001

 Date: 15/06/2019 16:44:38
*/


// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");
db.getCollection("users").createIndex({
    "$**": "text"
}, {
    name: "name",
    weights: {
        "$**": NumberInt("1"),
        name: NumberInt("1")
    },
    "default_language": "english",
    "language_override": "language",
    textIndexVersion: NumberInt("3")
});

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("5d0094281ece7c1f3f048480"),
    name: "system",
    password: "013c332c2e2da7a025074d5ca903900bbd73ab8f",
    role: "SYSTEM",
    experience: NumberInt("0"),
    "group_ids": [ ],
    addedTime: ISODate("2019-06-12T05:56:55.476Z"),
    editedTime: ISODate("2019-06-12T05:56:55.476Z"),
    removedTime: null,
    __v: NumberInt("0"),
    notBeforeTime: "2019-06-13 07:51:56.122",
    nickname: "计划消息",
    url: "user/system.png",
    level: 100
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5d0094281ece7c1f3f048481"),
    name: "admin",
    password: "e45a4f1b101e1e609e258f799a5f40fcb0d8f4e4",
    role: "ADMIN",
    notBeforeTime: "2019-06-13 07:51:56.122",
    nickname: "管理员",
    url: "user/admin.png",
    level: 100
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5d00942e1ece7c1f3f048483"),
    name: "user001",
    password: "b5bdbedcdb704be75eec34e1b3f4160a541c0dd7",
    role: "MEMBER",
    notBeforeTime: "2019-06-13 07:51:56.122",
    nickname: "用户一",
    url: "user/user.png",
    level: 1
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5d009f745643471f638d4e23"),
    name: "user002",
    password: "cb3e196acc2dab32fe2ea39d4c66651f042d90a1",
    role: "MEMBER",
    experience: NumberInt("0"),
    "group_ids": [ ],
    addedTime: ISODate("2019-06-12T06:44:57.275Z"),
    editedTime: ISODate("2019-06-12T06:44:57.275Z"),
    removedTime: null,
    __v: NumberInt("0"),
    notBeforeTime: "2019-06-13 07:51:56.122",
    nickname: "用户二",
    url: "user/user.png",
    level: 2
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5d0492d172d2c37544a68848"),
    name: "user003",
    url: "user/user.png",
    nickname: "用户三",
    password: "c37190cc10f156598fd23110c23a2b1ba9f4e3af",
    level: NumberInt("3"),
    role: "MEMBER",
    experience: NumberInt("0"),
    "group_ids": [ ],
    addedTime: ISODate("2019-06-15T06:01:49.289Z"),
    editedTime: ISODate("2019-06-15T06:01:49.289Z"),
    notBeforeTime: ISODate("2019-06-15T06:01:49.289Z"),
    removedTime: null,
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5d04945e72d2c37544a6884d"),
    name: "user004",
    url: "user/user.png",
    nickname: "用户四",
    password: "03a3c687c89265a9145687e0a67e5972b00b29b6",
    level: NumberInt("4"),
    role: "MEMBER",
    experience: NumberInt("0"),
    "group_ids": [ ],
    addedTime: ISODate("2019-06-15T06:01:49.289Z"),
    editedTime: ISODate("2019-06-15T06:01:49.289Z"),
    notBeforeTime: ISODate("2019-06-15T06:01:49.289Z"),
    removedTime: null,
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5d04946372d2c37544a6884f"),
    name: "user005",
    url: "user/user.png",
    nickname: "用户五",
    password: "dfdac1988984ca7f72907c6a04ace510f9c21995",
    level: NumberInt("5"),
    role: "MEMBER",
    experience: NumberInt("0"),
    "group_ids": [ ],
    addedTime: ISODate("2019-06-15T06:01:49.289Z"),
    editedTime: ISODate("2019-06-15T06:01:49.289Z"),
    notBeforeTime: ISODate("2019-06-15T06:01:49.289Z"),
    removedTime: null,
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5d04946772d2c37544a68851"),
    name: "user006",
    url: "user/user.png",
    nickname: "用户六",
    password: "bb8091cfaec1dd63a8e6e4a97291f58d412d973b",
    level: NumberInt("6"),
    role: "MEMBER",
    experience: NumberInt("0"),
    "group_ids": [ ],
    addedTime: ISODate("2019-06-15T06:01:49.289Z"),
    editedTime: ISODate("2019-06-15T06:01:49.289Z"),
    notBeforeTime: ISODate("2019-06-15T06:01:49.289Z"),
    removedTime: null,
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5d04947372d2c37544a68853"),
    name: "user007",
    url: "user/user.png",
    nickname: "用户七",
    password: "1fee9752173fab31d241d9f56f7d58ade8695a80",
    level: NumberInt("7"),
    role: "MEMBER",
    experience: NumberInt("0"),
    "group_ids": [ ],
    addedTime: ISODate("2019-06-15T06:01:49.289Z"),
    editedTime: ISODate("2019-06-15T06:01:49.289Z"),
    notBeforeTime: ISODate("2019-06-15T06:01:49.289Z"),
    removedTime: null,
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5d04949872d2c37544a68855"),
    name: "user008",
    url: "user/user.png",
    nickname: "用户八",
    password: "642d4e5baab28ed468d3ea77b6e202fe2b241ccd",
    level: NumberInt("8"),
    role: "MEMBER",
    experience: NumberInt("0"),
    "group_ids": [ ],
    addedTime: ISODate("2019-06-15T06:01:49.289Z"),
    editedTime: ISODate("2019-06-15T06:01:49.289Z"),
    notBeforeTime: ISODate("2019-06-15T06:01:49.289Z"),
    removedTime: null,
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5d0496e9ad10ef3bb4125a9d"),
    name: "user004",
    url: "",
    nickname: "",
    password: "642d4e5baab28ed468d3ea77b6e202fe2b241ccd",
    level: NumberInt("1"),
    role: "USER",
    experience: NumberInt("0"),
    "group_ids": [ ],
    addedTime: ISODate("2019-06-15T06:53:21.155Z"),
    editedTime: ISODate("2019-06-15T06:53:21.155Z"),
    notBeforeTime: ISODate("2019-06-15T06:53:21.155Z"),
    removedTime: null,
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5d049df3ad10ef3bb4125a9e"),
    name: "user004",
    url: "",
    nickname: "",
    password: "642d4e5baab28ed468d3ea77b6e202fe2b241ccd",
    level: NumberInt("1"),
    role: "USER",
    experience: NumberInt("0"),
    "group_ids": [ ],
    addedTime: ISODate("2019-06-15T06:53:21.155Z"),
    editedTime: ISODate("2019-06-15T06:53:21.155Z"),
    notBeforeTime: ISODate("2019-06-15T06:53:21.155Z"),
    removedTime: null,
    __v: NumberInt("0")
} ]);



db.getCollection("users").dropIndex("name");

db.getCollection("users").createIndex({
    name: "text"
}, {
    name: "name"
});