export default class AppConfig {

  constructor() {
    this.config = {
      httpServer : {
        protocol : 'http',
        host : 'localhost',
        port : 3000
      },
      db : {
        urlPrefix : 'mongodb',
        server : 'localhost',
        port : '27017',
        dbName : 'microCRM',
        username : null,
        password : null
      }
    };
  }

  getHttpProtocol = () => {
    return this.config.httpServer.protocol;
  }

  getHttpHost = () => {
    return this.config.httpServer.host;
  };

  getHttpPort = () => {
    return this.config.httpServer.port;
  }

  getHostUrl = () => {
    return `${this.getHttpProtocol()}://${this.getHttpHost()}:${this.getHttpPort()}`;
  }

  getDBConnection = () => {
    const auth = ( this.config.db.username !== null) ? `${this.config.db.username}:${this.config.db.password}@` : '';
    return `${this.config.db.urlPrefix}://${auth}${this.config.db.server}:${this.config.db.port}/${this.config.db.dbName}`;
  }
};
