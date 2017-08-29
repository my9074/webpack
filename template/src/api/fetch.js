import axios from 'axios'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const service = axios.create({
  timeout: 10000{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default service{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
