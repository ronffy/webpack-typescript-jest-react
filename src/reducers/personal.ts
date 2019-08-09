
const initState = {
  activeKey: 'tab1',
  tabs: [
    {
      key: 'tab1',
      tab: 'tab标题1',
      content: 'tab内容1',
    },
    {
      key: 'tab2',
      tab: 'tab标题2',
      content: 'tab内容2',
    }
  ]
}

export default (state = initState, { payload, type }) => {
  switch (type) {
    case 'PERSONAL_ACTIVEKEY':
      return {
        ...state,
        activeKey: payload.activeKey
      };
  
    default:
      return state;
  }
}