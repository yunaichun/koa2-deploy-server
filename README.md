## 简介

基于 Koa2 搭建的后台项目模版, 包含:

- MySQL 数据增删查改
- MongoDB 数据增删查改
- Redis 数据存储
- 上传、cookie、session
- pm2 自动发布到阿里 ECS

## 项目启动

```sh
# 本地开发
$ npm run dev

# 数据库脚本
$ npm run auto:sql

# 检测 MySQL 连接是否成功
$ npm run test:sequelize

# 检测 MongoDB 连接是否成功
$ npm run test:mongoose

# 检测 Redis 连接是否成功
$ npm run test:ioredis

# pm2 测试环境发布
$ npm run deploy:stag

# pm2 正式环境发布
$ npm run deploy:prod
```

## 目录结构

```bash
# 每个目录下分为 mongo、mysql 两类
|-- src            
    |-- app.js                入口文件         
    |-- config                配置文件
    |-- model                 实体层  
    |-- service               接口层
    |-- controller            逻辑层
    |-- router                路由层
    |-- db                    数据库脚本等
    |-- static                静态服务目录
    |-- middleware            中间件
    |-- utils                 通用方法
    |-- test                  测试文件等
```

## API 文档

- [接口文档](./API.md)

## 学习笔记

- Redis 存储 session: https://www.answera.top/backend/redis/session
- Redis 缓存请求: https://www.answera.top/backend/redis/impl
- MySQL 文档对象模型 Sequelize 在 koa2 中的使用: https://www.answera.top/backend/mysql/orm
- MongoDB 文档对象模型 Mongoose 在 koa2 中的使用: https://www.answera.top/backend/mongo/orm
- express 中间件: https://www.answera.top/backend/node/express
- koa2 中间件: https://www.answera.top/backend/node/koa
- koa2 服务端渲染: https://www.answera.top/backend/node/ssr
