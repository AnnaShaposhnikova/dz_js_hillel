import { log } from "./shared/logger.js";
import loginController from "./features/login/login.controller";
import $ from "jquery";
import LayoutController from "./core/layout/layout.controller.js";
import MainController from "./main.controller";
import("./some.css");

const $container = $("#root");
new MainController($container);
