const path = require('path');
const fs = require('fs');
const Service = require('../service/mysql');
const Utils = require('../utils/output');

// == 获取动态路由参数: ctx.params
// == 获取请求头参数: ctx.request.query
// == 获取请求体参数: ctx.request.body
// == 获取文件参数: ctx.request.files
module.exports = {
  async insert(ctx, next) {
    const sql = 'insert into test(id, username) values(1, "xiaoming")';
    const result = await Service.insert(sql);
    ctx.body = Utils.success({
        data: result
    });
    await next();
  },
  async delete(ctx, next) {
    const sql = 'delete from test where id=1';
    const result = await Service.delete(sql);
    ctx.body = Utils.success({
        data: result
    });
    await next();
  },
  async select(ctx, next) {
    const sql = 'SELECT * FROM test';
    const result = await Service.select(sql);
    ctx.body = Utils.success({
        data: result
    });
    await next();
  },
  async update(ctx, next) {
    const sql = 'update test set username="xiaoli" where id=2';
    const result = await Service.update(sql);
    ctx.body = Utils.success({
        data: result
    });
    await next();
  },
  async upload(ctx, next) {
    const { file } = ctx.request.files;
    const { path: uploadPath, name } = file;
    const readStream = fs.createReadStream(uploadPath);
    const ext = name.split('.').pop();
    const newPath = path.join(__dirname,  `../static/${Date.now()}.${ext}`);
    const writeStream = fs.createWriteStream(newPath);
    readStream.pipe(writeStream);
    ctx.body = Utils.success({
      data: 'file 上传成功'
    });
    await next();
  },
  async setCookies(ctx, next) {
    ctx.cookies.set(
      'uid', 
      '123456789',
      {
        domain: 'localhost',
        path: '/',
        maxAge: 10 * 60 * 1000,
        expires: new Date('2021-02-15'),
        httpOnly: true,
        sameSite: true,
        overwrite: true,
      }
    );
    ctx.body = Utils.success({
      data: 'cookies 写入成功'
    });
    await next();
  },
  async getCookies(ctx, next) {
    ctx.body = Utils.success({
      data: `cookies 读取成功: ${ctx.cookies.get('SESSION_ID')}`
    });
    await next();
  },
  async setSession(ctx, next) {
    ctx.session = {
      user_id: Math.random().toString(36).substr(2),
      count: 0
    };
    ctx.body = Utils.success({
      data: ctx.session
    });
    await next();
  },
  async getSession(ctx, next) {
    ctx.session.count = ctx.session.count + 1;
    // == session 被存储在 _mysql_session_store 表中
    // == ctx.session 等价于 select data from  where id=`SESSION_ID:${ctx.cookies.get('SESSION_ID')}`;
    ctx.body = Utils.success({
      data: ctx.session
    });
    await next();
  }
};
