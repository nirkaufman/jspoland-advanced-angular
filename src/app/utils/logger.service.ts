export class LoggerService {

  constructor() {
    console.log('LoggerService constructed');
  }

  public log(value: string) {
    console.log(`logger at ${new Date()}:${value}`);
  }

}