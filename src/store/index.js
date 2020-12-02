import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk';
import reducers from "./reducers";

let defaultVal = {
  from: '北京',
  to: '上海',
  isCitySelectorVisible: false,
  currentSelectingLeftCity: false, // 当前选择的是from的还是to的值
  cityData: null, // 城市数据
  isLoadingCityData: false, // 是否在加载城市数据
  isDateSelectorVisible: false,
  highSpeed: false
}
const store = createStore(
  combineReducers(reducers),
  {
   ...defaultVal
  },
  applyMiddleware(thunk)
);

export default store;