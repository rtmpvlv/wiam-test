import { configure, makeAutoObservable } from "mobx";
import BaseApi from "../api/baseApi";
import FormStore from "../entities/formStore";

configure({
  computedRequiresReaction: true,
  enforceActions: "observed",
});

export default class RootStore {
  baseApi: BaseApi;
  formStore: FormStore;

  constructor() {
    makeAutoObservable(this);
    this.baseApi = new BaseApi(this);
    this.formStore = new FormStore(this);
  }

  init = () => {
    this.formStore.getCategories();
  }
}
