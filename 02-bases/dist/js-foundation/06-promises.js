"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
/* eslint-disable @typescript-eslint/no-throw-literal */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const plugins_1 = require("../plugins");
const getPokemonById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `http://pokeapi.co/api/v2/pokemon/${id}`;
        const data = yield plugins_1.httpClientPlugin.get(url);
        return data.name;
    }
    catch (error) {
        throw `Pokemon not found with id ${id}`;
    }
});
exports.getPokemonById = getPokemonById;
