import { useState, useEffect } from 'react';
import i18n from "i18next";
import moment from 'moment';

export const CoinTypes = {
  BTC: 'BTC',
  USDC: 'USDC',
  USD: 'USD',
  ETH: 'ETH',
  ADA: 'ADA',
  XRP: 'XRP',
  LTC: 'LTC',
  EUR: 'EUR'
};
export const MAX_FAILED_ATTEMPTS = 5;
export const FLOAT_FIXED_DIGITS = 8;
export const MESSAGE_DURATION = 6;
export const MESSAGE_DURATION_LONG = 12;
export const ALLOWED_SMS_ATTEMPTS = 6;
export const cardTypes = {
  PlasBit_Virtual : 'PlasBit Virtual',
  PlasBit_Pro : 'PlasBit Pro',
  PlasBit_Premium: 'PlasBit Premium'
};
export const ErrorTypes = {
  LOGGED_OUT: 'LOGGED_OUT',
  UNAUTHORIZED: 'UNAUTHORIZED',
  TOO_MANY_VERIFY_ATTEMPTS: 'TOO_MANY_VERIFY_ATTEMPTS',
  INSUFFICIENT_FUNDS: 'INSUFFICIENT_FUNDS',
  INVALID_INPUT: 'INVALID_INPUT',
  MISSING_DATA: 'MISSING_DATA',
  TOKEN_EXPIRED: 'TOKEN_EXPIRED',
  TOKEN_WRONG: 'TOKEN_WRONG',
  UNVERIFIED: 'UNVERIFIED',
  BLOCKED: 'BLOCKED',
  BLOCKED_TMP: 'BLOCKED_TMP',
  ACTION_REPEATED: 'ACTION_REPEATED',
  MOCK_BTC_DATA_IS_OFF: 'MOCK_BTC_DATA_IS_OFF',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  NO_CONNECTION: 'NO_CONNECTION',
  NO_ADDRESS_CREATED: 'NO_ADDRESS_CREATED',
};
export const levels = ['Very Weak', 'Weak', 'Medium', 'Strong', 'Very Strong'];
export const CardStatuses = {
  'ACTIVE': 'ACTIVE',
  'DEACTIVATED': 'DEACTIVATED',
};

export const UserStatuses = {
  'VERIFIED': 'VERIFIED',
  'ACTIVE': 'ACTIVE',
  'BLOCKED': 'BLOCKED',
};

export const TicketStatus = {
  'PENDING': 'PENDING',
  'RESPONDED': 'RESPONDED',
  'COMPLETED': 'COMPLETED',
  'DELETED': 'DELETED'
};

export const TicketSender = {
  'ADMIN': 'SUPPORT TEAM',
  'USER': 'USER'
};

export const TransactionStatus = {
  'NEW': 'NEW',
  'DELETED': 'DELETED'
};

export const AccountType = {
  "private": "Personal Account",
  "public": "Corporate Account"
};

export const PageType = {
  "Blog": "Blog",
  "Basic": "Basic",
  "DesignedBasic" : "DesignedBasic",
  "CryptoAdvanced": "CryptoAdvanced",
  "CryptoBasic": "CryptoBasic",
  "Anonymous": "Anonymous",
};

export const CardPurhaseTypes = {
  DEPOSITED: 'deposited',
  WITHDRAWN: 'withdrawn',
  WITHDRAWN_PENDING: 'withdrawn_pending',
  WITHDRAWN_DENIED: 'WITHDRAWN_DENIED',
  ORDERED: 'ordered',
  MONTHLY_FEE: 'monthly_fee',
  DECLINED: 'declined',
  WIRED: 'wired'
};

export const TransactionStatuses = {
  COMPLETED: 'completed',
  PENDING: 'pending',
  DENIED: 'denied',
};

export const Colors = {
  BLUE: '#1890ff',
  BLUE_DARK: '#081125',
  RED: 'red',
  GREEN: 'green',
  GRAY: '#565d6d'
};

export const FeeType = {
  FIXED: 'fixed',
  PERCENT: 'percent',
};

export const CoinNames = {
  BTC: 'Bitcoin (BTC)',
  USDC: 'Ethereum (ERC20)',
  USD: 'USD',
  ETH: 'Ethereum (ETH)',
  ADA: 'Cardano',
  XRP: 'XRP',
  LTC: 'Litecoin'
};

export const CoinConfirmations = {
  [CoinTypes.BTC]: '3',
  [CoinTypes.USDC]: '35',
  [CoinTypes.ETH]: '35',
  [CoinTypes.LTC]: '12',
  [CoinTypes.ADA]: '10',
};


export const passwordPattern = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).(.{5,})';
export const imageEmpty = 'data:image/png;base64,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';
export const imageCheck = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMS41MiAzMS41MiI+PGRlZnM+PHN0eWxlPi5jbHMtMSwuY2xzLTJ7ZmlsbDpub25lO3N0cm9rZTojNGY2ZWY3O30uY2xzLTF7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjEuOTVweDt9LmNscy0ye3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MS45NXB4O308L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwb2x5bGluZSBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNi4wNyAxNy4xNCAxMS42MSAyMi42OCAyNS40NSA4Ljg0Ii8+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSIwLjk3IiB5PSIwLjk3IiB3aWR0aD0iMjkuNTciIGhlaWdodD0iMjkuNTciIHJ4PSI0LjQzIi8+PC9nPjwvZz48L3N2Zz4=';

export const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email)
    .toLowerCase());
};


export const cssStyles = {
  h1: {
    fontSize: '3.4em'
  },
  h2: {
    fontSize: '2.7em'
  },
  h3: {
    fontSize: '1.8em'
  },
  h4: {
    fontSize: '1.5em'
  },
  h5: {
    fontSize: '1.1em'
  },
  h6: {
    fontSize: '0.6em'
  }
};

export const passwordSettings = {
  height: 5,
  colorScheme: {
    levels: ['#ff4033', '#fe940d', '#ffd908', '#cbe11d', '#6ecc3a'],
    noLevel: 'lightgrey',
  },
};

export const getCalculatedFeeByPercent = (amount, feePercent) => {
  if (amount && feePercent) {
    const calculatedFee = Number(((amount / 100) * feePercent).toFixed(FLOAT_FIXED_DIGITS));
    return calculatedFee;
  }
  return 0;
};

const isItNumber = (value) => {
  return typeof value === 'number';
};

export const asNumber = (num, digits) => {
  if (num && !isItNumber(num)) {
    num = parseFloat(num);
  }
  return num && Number(num.toFixed(digits || FLOAT_FIXED_DIGITS));
};

export const asNumberCard = (num) => {
  return asNumber(num, 2);
};

export const getMinMaxArray = (data) => {
  if (Array.isArray(data) && data.length > 0) {
    let min = 0,
      max = 0;
    data.forEach((d) => {
      if (d.price < min || min === 0) {
        min = d.price;
      }
      if (d.price > max) {
        max = d.price;
      }
    });

    min = parseInt(min - (min * 0.12));
    min = min < 0 ? 0 : min;
    max = parseInt(max + (max * 0.12));
    return {
      min,
      max
    };
  }
};

export const getFilteredArray = (data, size) => {
  if (Array.isArray(data) && data.length > size) {
    const ind = parseInt(data.length / size, 10);
    return data.filter((t, index) => index % ind === 0);
  }
};

export const getReversedArray = (data) => {
  if (Array.isArray(data)) {
    let r = [];
    for (let i = data.length - 1; i >= 0; i--) {
      r.push(data[i]);
    }
    return r;
  }
};

export const getReversedFilteredArray = (data, size) => {
  return getFilteredArray(getReversedArray(data), size);
};

export const getFeeAmount = (amount, feeObj) => {
  if (amount && feeObj && feeObj.feeAmount) {
    const type = feeObj.type || FeeType.PERCENT;
    let feeAmount = 0;
    if (type === FeeType.FIXED) {
      feeAmount = feeObj.feeAmount;
    } else if (type === FeeType.PERCENT) {
      feeAmount = getCalculatedFeeByPercent(amount, feeObj.feeAmount);
    }
    return feeAmount;//amount > 0 ? amount - feeAmount : amount + feeAmount;
  }
  return 0;
};

export const getAmountWithFee = (amount, feeObj) => {
  if (amount && feeObj && feeObj.feeAmount) {
    const type = feeObj.type || FeeType.FIXED;
    let feeAmount = 0;
    if (type === FeeType.FIXED) {
      feeAmount = feeObj.feeAmount;
    } else if (type === FeeType.PERCENT) {
      feeAmount = getCalculatedFeeByPercent(amount, feeObj.feeAmount);
    }
    return Number((amount - feeAmount).toFixed(FLOAT_FIXED_DIGITS));//amount > 0 ? amount - feeAmount : amount + feeAmount;
  }
  return amount;
};

export const calculateTotals = (amount, isDeposit, feePercentRequested, definitionRate) => {
  if (amount && definitionRate) {
    const feePercent = feePercentRequested || 0;
    // feePercent = withNoFee ? 0 : definition.feeData.feeAmount;
    try {
      const amountFloat = parseFloat(amount);
      const feeFiat = getCalculatedFeeByPercent(amountFloat, feePercent);
      const amountFiat = asNumber(!isDeposit ? amountFloat - feeFiat : amountFloat + feeFiat);
      const totals = {
        amount,
        amountFiat,
        feeFiat,
        rate: definitionRate,
        amountCrypto: asNumber(amountFiat / definitionRate),
        feeCrypto: asNumber(feeFiat / definitionRate),
      };
      return totals;
    } catch (e) {
      console.warn('calculateTotals', e);
    }
  }
};

export const isMobile = () => {
  return (/Mobi/.test(navigator.userAgent) || window.innerWidth < 768);
};

export const getWidth = () => {
  return !isMobile() ? '100%' : '50%';
};

export const passwordInputProps = {
  prefixCls: 'passwordInput',
  size: 'large',
};

export const handleTestTransactions = (transactions) => {
  if (transactions) {
    return transactions.map(tr => {
      // console.log(tr);
      // if (tr.to) {
      //   console.log("GGGGGG ", tr.to.address_info);
      // }
      return {
        tranId: tr._id,
        type: tr.type,
        user: tr.user,
        status: tr.status,
        from: {
          resource: 'bitcoin_network',
          currency: tr.coin
        },
        to: {
          resource: 'user',
          email: 'johndoe@some-gmail.com',
          name: 'somename',
          avatar_url: 'https://images.coinbase.com/avatar?s=128',
          currency: tr.coin
        },
        details: {
          title: `Received ${tr.coin}`,
          subtitle: `From ${tr.coin} address`,
          message: `Received 0.0015 ${tr.coin} (₪181.86)`,
          health: 'positive'
        },
        created_at: tr.created_at,
        updated_at: tr.updated_at,
        resource: 'transaction',
        resourcePath: tr.resourcePath,
        network:
        {
          status: 'confirmed',
          status_description: null,
          hash: 'c3abfebe44312cf1ebd8030d18fb80211fd740cf365717dbd110f9a78b26845a',
          transaction_url: 'https://blockchain.info/tx/c3abfebe44312cf1ebd8030d18fb80211fd740cf365717dbd110f9a78b26845a'
        },
        transactionAmount: tr.transactionAmount,
        currency: tr.coin,
        amount: {
          amount: tr.native_amount,
          currency: tr.coin
        },
        // transactionAmount: (tr.amount && tr.amount.amount) || 0,
        native_amount: tr.native_amount,
      };
    });
  }
};

// export const handleTransaction = (tr) => {
//   let updatedTr = {
//     ...tr,
//   };
//   delete updatedTr.client;
//   delete updatedTr.account;
//   return {
//     ...updatedTr,
//     tranId: tr.id,
//     transactionAmount: (tr.amount && tr.amount.amount && parseFloat(tr.amount.amount)) || 0,
//     currency: tr.amount && tr.amount.currency || '',
//     // accountAmount: (tr.account && tr.account.balance && tr.account.balance.amount) || 0,
//     // transactionAmount: (tr.amount && tr.amount.amount) || 0,
//     // native_amount: tr.native_amount,
//   };
// };

// export const handleTransactions = (transactions) => {
//   if (transactions) {
//     return transactions.map(tr => {
//       return handleTransaction(tr);
//     });
//   }
// };

export const getDifferenceDatesInDays = (date) => {
  if (!date) {
    return;
  }
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = asNumber(diffTime / (1000 * 60 * 60 * 24), 8);
  // console.log(diffTime + " milliseconds");
  // console.log(diffDays + " days");
  return diffDays;
};
// export const isLevelEmpty = (index) => {
//   const back = $('.passwordInput+div div')
//     .eq(index)
//     .css('background-color');
//   return back && back.indexOf('211, 211, 211') >= 0;
// };
//
// export const getPasswordLevel = () => {
//   const comps = $('.passwordInput+div div').length || 0;
//   if (comps === 5) {
//     if (isLevelEmpty(0)) {
//       // setLevel(levels[0]);
//     } else if (isLevelEmpty(1)) {
//       return levels[0];
//     } else if (isLevelEmpty(2)) {
//       return levels[1];
//     } else if (isLevelEmpty(3)) {
//       return levels[2];
//     } else {
//       return levels[3];
//     }
//   }
//   return "";
// };

export const getDateString = (dateStr) => {
  if (dateStr) {
    const d = new Date(dateStr);
    if (d.toString() !== 'Invalid Date') {
      return d.toLocaleString();
    }
  }
  return '';
};
export const getEmail = (user) => {
  return user && user.emails && user.emails[0] && user.emails[0].address;
};
export const getMaskedEmail = (user) => {
  const email = getEmail(user);
  if (email) {
    const ind = email.indexOf('@');
    if (ind >= 0 && email.length > 3) {
      return email.substring(0, 3) + '***' + email.substring(ind);
    }
  }
  return email;
};
export const getMaskedText = (text) => {
    if (text && text.length > 0) {
      let middle = parseInt(text.length / 2);
      return text.substring(0, middle) + '***' + (text.length > middle + 3 ? text.substring(middle + 3) : "");
    }
};

export const getUserDisplayData = (user) => {
  return (user && {
    id: user._id,
    email: getEmail(user),
  }) || '(no user)';
};

export const unauthorizedAttempt = (log, method, user) => {
  if (log) {
    log.warn('Unauthorized attempt on ' + method, getUserDisplayData(user));
  }
  throw new Error(ErrorTypes.UNAUTHORIZED);
};

export const isVerified = (user) => {
  return user && user.emails && user.emails[0] && user.emails[0].verified;
};

export const isPhoneVerified = (user) => {
  return user && user.userProfile && user.userProfile.isPhoneVerified;
};

export const getUserFullName = (user) => {
  return (user && user.userProfile && user.userProfile.firstName &&
    user.userProfile.lastName && (user.userProfile.firstName + ' ' + user.userProfile.lastName)) || 'Anonymous';
};
// export const isActiveRegularUser = (user) => {
//   return isVerified(user) && !isAdmin(user) && user.userStatus;
// };
export const isAdmin = (user) => {
  return user && user.admin;
};

export const isArrayNotEmpty = (arr) => {
  return Array.isArray(arr) && arr.length > 0;
};
export const isObjectEmpty = (val) => {
  if (!val || val.toString()
    .trim() === '' || JSON.stringify(val) === '{}' || JSON.stringify(val) === '[]') {
    return true;
  } else {
    return false;
  }
};

export const isJson = (obj) => {
  return obj && obj.constructor === ({}).constructor;
};

export const copyToClipboard = (text) => {
  let dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.setAttribute('value', text);
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
};

export const isValidImageUrl = (url) => {
  return url && (url.toString()
    .startsWith('http') || url.toString()
      .startsWith('/'));
};

export const getUniqueToken = (length) => {
  const l = length || 6;
  const value = Math.floor(Math.random() * Math.pow(10, l))
    .toString();
  return value.length === l ? value : getUniqueToken(length);
};

export const getQrAddressWithAmount = (coin, uri, amount) => {
  let qrAddressFull = uri || '';
  if (coin && uri && amount) {
    if (coin === CoinTypes.BTC) {
      qrAddressFull += '?amount=' + amount;
    } else if (coin === CoinTypes.ETH || coin === CoinTypes.USDC) {
      qrAddressFull += '?value=' + amount;
    } else if (coin === CoinTypes.LTC) {
      qrAddressFull += '?amount=' + amount;
    } else if (coin === CoinTypes.ADA) {
      qrAddressFull += '?amount=' + amount;
    } else {
      qrAddressFull += '?amount=' + amount;
    }
  }
  return qrAddressFull;
};

export const getQrAddress = (coin, address, amount) => {
  if (coin && address) {
    let qrAddress;
    if (coin === CoinTypes.BTC) {
      qrAddress = getQrAddressWithAmount(coin, 'bitcoin:' + address, amount);
    } else if (coin === CoinTypes.ETH || coin === CoinTypes.USDC) {
      qrAddress = getQrAddressWithAmount(coin, 'ethereum:' + address, amount);
    } else if (coin === CoinTypes.LTC) {
      qrAddress = getQrAddressWithAmount(coin, 'litecoin:' + address, amount);
    } else if (coin === CoinTypes.ADA) {
      qrAddress = getQrAddressWithAmount(coin, 'ada:' + address, amount);
    } else {
      qrAddress = getQrAddressWithAmount(coin, coin.toLowerCase() + ':' + address, amount);
    }
    return qrAddress;
  }
  return;
};

export const useResize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    isResponsive: false
  });

  const updateSize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < 768,
      isResponsive: window.innerWidth < 1320
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return screenSize;
};

export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const handler = e => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("mouseover", handler);
    }

    return () => {
      window.removeEventListener("mouseover", handler);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};

export const getImg = (img) => {
  return `${process.env.REACT_APP_STORAGE}` + img;
};

export const getLocalImg = (img) => {
  return 'images/' + img;
};

export const setInputFilter = (textbox, inputFilter) => {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty.call("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
};

export const formatErrorMessage = (meteorError) => {
  let message = '';

  if (meteorError) {
    if (ErrorTypes[meteorError.error]) {
      message += i18n.getTranslation(`error.${meteorError.error}`);
    } else {
      message += meteorError.error || '';
    }

    if (meteorError.reason) {
      message += ` - ${meteorError.reason}`;
    }
  }

  return message;
};

export const backCard = {
  'bluecard': 'blue-back.svg',
  'blackcard.png': 'black-back.svg',
  'whitecard.png': 'white-back.svg'
};

export const findKeyWordIndexInBlocks = (keyword, blocks) => {
  let indexOfTextContainKeyword = 0;
  blocks.forEach((element, index) => {
    if (element.text.toLowerCase().includes(keyword.toLowerCase())) {
      indexOfTextContainKeyword = index;
    }
  });
  return indexOfTextContainKeyword;
};

export const stringContainsOnlyNumbers = (string) => /^[0-9.,]+$/.test(string);

//This function works crossponding with 
//the date data being inserted to every article
// PLEASE BEWARY OF CHANGING THE DATE TYPE ON SERVER SIDE
// IT WILL AFFECT THIS METHOD
export const filterDate = (dateToFilter)  => {
  if(!dateToFilter) {
    return "";
  }
  const formatDate = new Date(dateToFilter)
  if(!(formatDate instanceof Date)){
    return "";
  }
  const date = moment(formatDate).format('MMM DD, YYYY').toUpperCase();
  return date;
}

export const stringToNumber = (string) => {
  if (!string) {
    return 0;
  }
  if (string && !stringContainsOnlyNumbers(string)) {
    return 0;
  }
  return parseFloat(string);
};

export const pageType = {
  FAQ : 'FAQ',
  Article : 'Article',
  Blog: "Blog",
  Basic: "Basic",
  DesignedBasic: "DesignedBasic",
  Anonymous: "Anonymous",
  CryptoAdvanced: "CryptoAdvanced",
  CryptoBasic: "CryptoBasic",
  RSS: "RSS",
};

export const siteTitles = {
  home: "PlasBit, Get more out of your Plastic |Live on BTC ETH LTC USDC",
  wallet: "PlasBit wallet is designed to ensure maximum protection & privacy",
  cards : "PlasBit cards allow you to convert crypto to fiat | Freedom to spend",
  transfers: "PlasBit allows you to transfer crypto to fiat | Freedom to transfers",
  about: "About us | PlasBit brings professional financial services for crypto",
  calculator : "PlasBit calculator showing a real-time crypto prices",
  careers: "PlasBit careers | Looking for a new and exciting job? Click now",
  privacyNotice: "PlasBit privacy | Explains how we collect and protect users' data",
  privacyEu: "PlasBit EU privacy | Explains how we collect & protect users' data",
  privacyCookie:"PlasBit cookie notice |  Explains how we use cookies on our website.",
  legalTerm: "PlasBit terms of use | Govern the use of the products or services ",
  legalAccess: "PlasBit terms of use | Govern the use of the products or services ",
  contact: "PlasBit contact us | We are here for you | Contact our support team",
  widgets: "PlasBit widgets",
  Blog: "PlasBit blog | Get the latest news & guides about crypto and privacy",
  publicFaq: "FAQ | PlasBit FAQ",
  prices: "PlasBit cryptocurrency prices | Explore fluctuations in crypto market",
  security: "PlasBit security protects the server and the client-side",
  affiliate: "PlasBit affiliates card | A payment solution for marketing campaigns",
  community: "PlasBit community | Join the conversation",
  communityWall: "Community wall | Become an active part of the PlasBit experience",
  CryptoBasic: "PlasBit crypto basics",
  CryptoAdvanced: "PlasBit crypto advanced",
  Anonymous: "PlasBit anonymous",
  applyManager:"PlasBit | Customer Experience Operations",
  applyOfficer: "PlasBit | Compliance Officer and MLRO",
  applyPrivacy: "PlasBit | Legal Counsel - Privacy",
  applyProduct: "PlasBit | Product Manager",
  applyReact: "PlasBit | Frontend React Engineer",
  applyResearcher: "PlasBit | Digital Asset Researcher",
  applySales: "PlasBit | Sales Operations Administrator",
  applySenior: "PlasBit | Senior Product Manager",
  applySpecial: "PlasBit | HR Payroll Specialist",
  applyStack: "PlasBit | Full Stack Engineer",
  payment:"Accept Bitcoin & Crypto Payments With PlasBit payment widget.",
  pageNotFound:"Page Not Found"
};

export const siteDescriptions = {
  home: "We believe that everyone has the right to privacy, With plasbit you can use your cryptocurrency as you wish, Just load your card and spend it.",
  wallet: "We believe that you have the right to protect your crypto. With the PlasBit wallet, you can use your cryptocurrency safely as you wish.",
  cards : "We believe that you have the right to use your crypto privately. With the PlasBit cards, you can convert your crypto to fiat when you wish.",
  transfers: "Open an account for free to transfer crypto online in minutes. Track your payments and transfers, View your transfer history from anywhere.",
  about: "PlasBit empowers the power of blockchain technology that is not beholden to country borders or specific governments. read more about us.",
  calculator: "Use PlasBit's crypto calculator to find out exactly how much your cryptocurrency is worth. The calculator support all the global currencies.",
  careers: "Our team is encouraged to work closely with one another and alongside the executive team to increase economic freedom in the world.",
  privacyNotice: "PlasBit collect, store, use, and protect information including merchant processing services, websites, and any other features.",
  privacyEu: "PlasBit collect, store, use, and protect information including merchant processing services, websites, and any other features.",
  privacyCookie: "Cookies help our website learn which areas of the website are useful and which areas need improvement. Cookies also improve your experience.",
  legalTerm: "By using the acceptance services, you accept these terms and agree to be bound by them, confirm that you have read, understood & accepted all.",
  legalAccess: "By using the acceptance services, you accept these terms and agree to be bound by them, confirm that you have read, understood & accepted all.",
  contact: "Send us an email at support@plasbit.com or fill out the form below, and a member of our team will be in touch within one business day.",
  Blog: "Our blog contains a wide variety of articles and guides about the crypto industry, privacy, and anonymity browsing the web.",
  prices: "Top crypto prices and charts, up-to-date prices list. Free access to current data for Bitcoin and thousands of altcoins.",
  security: "PlasBit security protects your personal data and never stores any information to provide complete anonymity services.",
  affiliate: "Use the PlasBit affiliates card for sponsored ads on all the social media platforms such as Facebook, Google, etc.",
  community: "PlasBit community, join us and stay up to date by signing into one of our social media channels today. Join a family that stands for privacy.",
  communityWall: "PlasBit community wall, join our sharing wall. Tags us and share your activities with us, be a part of the PlasBit community.",
  payment:"Accept crypto payments online with the PlasBit payment widget. Receive payments directly to your bank account.",
  widgets:"PlasBit widgets allow you to copy and paste the widget for your site. You can load as many widgets of this type as you like.",
  publicFaq: "Get quick answers to your questions about PlasBit products and services. Our FAQ page covers everything you need to know.",
  CryptoBasic: "Learn the basics of cryptocurrency with PlasBit. Our comprehensive guide covers everything from understanding blockchain technology to financial freedom.",
  CryptoAdvanced:"Take your cryptocurrency knowledge to the next level with PlasBit's Crypto-Advanced page.",
  Anonymous: "Discover the world of anonymous transactions with PlasBit's Anonymous Guide. Learn how to protect your identity and keep your financial activities private.",
};

export const siteCanonical = {
  home: `${process.env.REACT_APP_HOME_URL}`,
  wallet: `${process.env.REACT_APP_HOME_URL}wallet/`,
  careers: `${process.env.REACT_APP_HOME_URL}careers/`,
  privacyNotice: `${process.env.REACT_APP_HOME_URL}privacy/notice`,
  privacyCookie: `${process.env.REACT_APP_HOME_URL}privacy/cookie`,
  privacyEu: `${process.env.REACT_APP_HOME_URL}privacy/eu`,
  blog: `${process.env.REACT_APP_HOME_URL}blog`,
  publicFaq: `${process.env.REACT_APP_HOME_URL}public-faq`,
  prices: `${process.env.REACT_APP_HOME_URL}prices`,
  transfers: `${process.env.REACT_APP_HOME_URL}transfers`,
  about: `${process.env.REACT_APP_HOME_URL}about`,
  contact: `${process.env.REACT_APP_HOME_URL}contact`,
  cards: `${process.env.REACT_APP_HOME_URL}cards`,
  widgets: `${process.env.REACT_APP_HOME_URL}widgets`,
  community: `${process.env.REACT_APP_HOME_URL}commuinty`,
  legalTerms: `${process.env.REACT_APP_HOME_URL}legal/term`,
  legalAccess: `${process.env.REACT_APP_HOME_URL}legal/access`,
  security: `${process.env.REACT_APP_HOME_URL}security`,
  cryptoBasic: `${process.env.REACT_APP_HOME_URL}Crypto-Basic`,
  cryptoAdvanced: `${process.env.REACT_APP_HOME_URL}Crypto-Advanced`,
  anonymous: `${process.env.REACT_APP_HOME_URL}Anonymous`,
};
