import Vue from "vue";
import {
  Button,
  Select,
  Scrollbar,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Loading,
  Image,
  Form,
  FormItem,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Message,
  Breadcrumb,
  BreadcrumbItem,
  DatePicker,
  Table,
  TableColumn,
  Checkbox
} from "element-ui";

Vue.use(Button);
Vue.use(Select);
Vue.use(Scrollbar);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Loading);
Vue.use(Image);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.component(Message.name, Message); //解决页面一刷新就弹出空的message
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(DatePicker);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Checkbox);
