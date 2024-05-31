class Stock {
  constructor(name, description, ticker, isin, country, exchange) {
    this.name = name;
    this.description = description;
    this.ticker = ticker;
    this.isin = isin;
    this.country = country;
    this.exchange = exchange;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getTicker() {
    return this.ticker;
  }

  getIsin() {
    return this.isin;
  }

  getCountry() {
    return this.country;
  }

  getExchange() {
    return this.exchange;
  }
}

class Bond {
  constructor(name, description, ticker, isin, nominal, coupon) {
    this.name = name;
    this.description = description;
    this.ticker = ticker;
    this.isin = isin;
    this.nominal = nominal;
    this.coupon = coupon;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getTicker() {
    return this.ticker;
  }

  getIsin() {
    return this.isin;
  }

  getNominal() {
    return this.nominal;
  }

  getCoupon() {
    return this.exchange;
  }
}

let new_bond = new Bond("ОФЗ 29009", "Описание", "SU29009RMFS6", "RU000A0JV4N8", "1000", "50");

console.log(new_bond.getName());