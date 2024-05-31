class Security {
  constructor(name, description, ticker, isin) {
    this.name = name;
    this.description = description;
    this.ticker = ticker;
    this.isin = isin;
    this.type = "";
  }

  getName() {
    return `Название ${this.type}: ${this.name}`
  }

  getDescription() {
    return `Описание ${this.type}: ${this.name}`
  }

  getTicker() {
    return `Тикер ${this.type}: ${this.name}`
  }

  getIsin() {
    return `ИСИН ${this.type}: ${this.name}`
  }

}

class Stock extends Security {
  constructor(name, description, ticker, isin, country, exchange) {
    super(name, description, ticker, isin)
    this.country = country;
    this.exchange = exchange;
    this.type = "акции"
  }

  getCountry() {
    return `Страна ${this.type}: ${this.country}`;
  }

  getExchange() {
    return `Биржа ${this.type}: ${this.exchange}`;
  }
}

class Bond extends Security {
  constructor(name, description, ticker, isin, nominal, coupon) {
    super(name, description, ticker, isin)
    this.nominal = nominal;
    this.coupon = coupon;
    this.type = "облигации"
  }

  getNominal() {
    return `Номинал ${this.type}: ${this.nominal}`;
  }

  getCoupon() {
    `Размер купона ${this.type}: ${this.coupon}`
  }
}


let new_bond = new Bond("ОФЗ 29009", "Описание", "SU29009RMFS6", "RU000A0JV4N8", "1000", "50");

console.log(new_bond.getName());