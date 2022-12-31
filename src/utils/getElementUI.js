import {
  InputNumber,
  Tooltip,
  Popover,
  Radio,
  Slider,
  Checkbox,
  Option,
  Select,
  MessageBox,
  Message,
  Dialog,
  Upload,
  Button,
  Input,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Tabs,
  TabPane,
  Notification,
  Form,
  FormItem,
  Tree,
  Image,
} from "element-ui";

const element = {
  install(Vue) {
    Vue.prototype.$baseMessage = (message, type) => {
      Message({
        offset: 60,
        showClose: true,
        message: message,
        type: type,
        dangerouslyUseHTMLString: true,
        duration: messageDuration,
      });
    };
    Vue.prototype.$baseMessage = (message, type) => {
      Message({
        offset: 60,
        showClose: true,
        message: message,
        type: type,
        dangerouslyUseHTMLString: true,
        duration: 3000,
      });
    };
    Vue.prototype.$notify = Notification;
    Vue.use(InputNumber);
    Vue.use(Tooltip);
    Vue.use(Popover);
    Vue.use(Radio);
    Vue.use(Slider);
    Vue.use(Checkbox);
    Vue.use(Option);
    Vue.use(Select);
    Vue.use(Dialog);
    Vue.use(Upload);
    Vue.use(Button);
    Vue.use(Input);
    Vue.use(Dropdown);
    Vue.use(DropdownItem);
    Vue.use(DropdownMenu);
    Vue.use(Tabs);
    Vue.use(TabPane);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Tree);
    Vue.use(Image);
  },
};
export default element;
