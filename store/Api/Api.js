import axios, {CancelToken} from "axios";

/**
 * Класс Api содержит все методы для связи с сервером проекта
 */
class Api {
    /**
     * В конструкторе создается axios и сохраняется во внутреннюю переменную {@link this.client}
     */
    constructor() {
        this.client = axios.create();
        this.token = null;
        this.refreshToken = null;

        this.source = axios.CancelToken.source();

        this.refreshRequest = null;

        this.client.defaults.baseURL = "http://127.0.0.1:8000/api/v1";
        // this.client.defaults.baseURL = "http://5.63.154.181:8000/api/v1";
        this.client.interceptors.request.use(
            (config) => {
                if (this.token === null) {
                    // if (!token) {
                        return {...config};
                    // }
                    // this.setToken(token);
                    // console.log(token)
                }
                const newConfig = {
                    ...config,
                };
                newConfig.headers.Authorization = `Bearer ${this.token}`;
                return newConfig;
            },
            (e) => {
                return Promise.reject(e);
            }
        );

        this.client.interceptors.response.use(
            (r) => r,
            async (error) => {
                this.refreshToken = localStorage.getItem("refresh_token");
                // console.log(this.refreshToken)
                if (
                    !this.refreshToken ||
                    // error.message ||
                    (error.response.status !== 401 && error.response.status !== 403) ||
                    error.config.retry
                ) {
                    // throw error
                    await Promise.reject(error);
                }
                if (!error.response.status) {
                    console.log('здесь ошибка')
                    // throw error
                }
                // if (!this.refreshRequest) {
                //     this.refreshRequest = this.client.post("/refresh-token/", {
                //         refresh: this.refreshToken,
                //     });
                // }
                // const {data} = await this.refreshRequest;
                // this.token = data.access;
                // localStorage.setItem("refresh_token", data.refreshToken);
                // this.refreshToken = data.refreshToken;
                const newRequest = {
                    ...error.config,
                    retry: true,
                };

                return this.client(newRequest);
            }
        );
    }

    setToken(some) {
        this.token = some;
    }

    getToken() {
        return this.token;
    }
    setRefreshToken(some) {
        this.refreshToken = some;
    }

    getRefreshToken() {
        return this.refreshToken;
    }

    /* основные api */

    /**
     * Вход в приложение
     * Отправляет данные пользователя {email,password}
     * Получает пару токенов и пользователя
     * @returns {Promise<*>}
     * @param {username,password} admin
     */
    async reLogin() {
        const res = await this.client.post("/refresh-token/", {
            refresh: this.refreshToken,
        })
        console.log('вызван reLogin')
        this.setToken(await res.data.access);
        console.log('после reLogin\'a получен токен', this.getToken());
        // sessionStorage.setItem('access_token', await res.data.access)
        return res
    }
    async login({username,password}) {
            const res = await this.client
                .post("/login/", {
                    username,
                    password,
                });
            console.log('вызван логин')
            this.setToken(await res.data.access);
            this.setRefreshToken(await res.data.access);
            // console.log('после логина получен токен', this.getToken());
            // console.log('после логина получен рефрешь токен', this.getRefreshToken());
            // sessionStorage.setItem('refresh_token', await res.data.refresh)
            // sessionStorage.setItem('access_token', await res.data.access)
            return res
    }

    /* для приложения клиента */

    // /**
    //  * Регистрация пользователя
    //  * Отправляет данные о пользователе из формы на сервер
    //  * Получает только статус операции
    //  * @param data
    //  * @returns {Promise<AxiosResponse<any>>}
    //  */
    // async register(data = {}) {
    //   return await this.client
    //     .post("/auth/register", data)
    //     .catch((e) => console.log(e));
    // }

    /*  еще не реализовал, осталось от клиента
          /!**
           * Восстановление пароля
           * Ввод email для отправки письма
           *
           * @param email
           * @returns {Promise<AxiosResponse<any>>}
           *!/
          async forgetEmail(email) {
              return await  this.client.post('/auth/forget/email',{email})
          }
  
          /!**
           * Восстановление пароля
           * Ввод code полученновго в email
           * @param code
           * @returns {Promise<AxiosResponse<any>>}
           *!/
          async forgetCode(code) {
              return await  this.client.post('/auth/forget/code',{code})
          }
  
          /!**
           * Восстановление пароля
           * Ввод пары даанных, "пароль" - "потдверждение пароля"
           * @param data
           * @returns {Promise<AxiosResponse<any>>}
           *!/
          async forgeRefreshPass(data) {
              return await  this.client.post('/auth/forget/refreshPass',data)
          }
  
          /!**
           * Автовход
           * После обновления страницы удаляется токен из приложения
           * Используя RefreshToken из localStorage восстанавливает утерянный токен
           * Получает новую пару токенов и пользователя
           * @returns {Promise<AxiosResponse<any>>}
           *!/
          async autoLog() {
              const refToken = localStorage.getItem('refresh_token');
              if (refToken) {
                  return await this.client.post('/auth/refresh', {refreshToken: refToken}).then(ref=> {
                      this.setToken(ref.data.accessToken);
                      localStorage.setItem('refresh_token', ref.data.refreshToken);
                      return ref.data.user
                  });
              }
          }
      */

    async tokenVerify() {
        const token = this.getToken();
        return await this.client.post('/token-verify/', {token: token});
    }

    async tokenRefresh() {
        const refresh = this.getRefreshToken();
        return await this.client.post("/refresh-token/",{refresh})
    }

    /**
     * Выход из приложения
     * Удаляются все токены и стирается currentUser из Redux
     */
    logout() {
        // localStorage.removeItem("refresh_token");
        // localStorage.removeItem("access_token");
        this.token = null;
        this.refreshToken = null;
    }

    /* главная страница */

    /**
     * Отметка\снятие отметки о присутствии клиента на занятии
     *
     * @param id {number} id клиента
     * @param set {boolean} состояние был/не был
     */
    async checkClient(id, set) {
        return await this.client.put(`/schedule/train/${id}/`, {is_visited: set});
    }

    async removeClientFromGroup(id) {
        return await this.client.delete(`/schedule/train/${id}/`);
    }

    async getProfile(id) {
        return await this.client.get(`/client/${id}/`)
        //     .then(r => {
        //     return r.data.find(client => Number(client.id) === Number(id));
        // });
    }

    async getProfileVisit(id) {
        return await this.client.get(`/client/${id}/trainings/`)
        //     .then(r => {
        //     return r.data.find(client => Number(client.id) === Number(id));
        // });
    }

    async editProfile(id, data) {
        return await this.client.put(`/client/${id}/`, {...data});
    }

    async editProfileParents(parents) {
        return await this.client.post(`/client/updateParents/`, {parents});
    }

    async createParents(id,parents) {
        console.log({parents});
        return await this.client.post(`/client/${id}/deleteParents/`, {parents});
    }

    async removeParents(id,parents) {
        console.log({parents});
        return await this.client.post(`/client/${id}/addParents/`, {parents});
    }

    async buyProfileAbonement(id, data) {
        return await this.client.post(`/subscription/clubCard/${id}/buy/`, {...data});
    }

    /**
     * Временный запрос на получение фиктивных клиентов
     * @returns {Promise}
     * @param {CancelToken} token токен для отмены вызова при уничтожении компонента
     */
    async getGeneralPageData() {
        return await this.client.get("/schedule/lesson/");
        // return await this.client.get("/schedule/lesson/today/");
    }

    /**
     *
     * @param token
     * @returns {Promise}
     */
    async getGroupList(token=null) {
        return await this.client.get("/core/group/", {cancelToken: token});
    }

    /**
     *
     * @param token
     * @returns {Promise}
     */
    async postNewGroup(group) {
        return await this.client.post("/core/group/",{...group});
    }

    /**
     *
     * @param token
     * @returns {Promise}
     */
    async getAgesGroupList(token=null) {
        return await this.client.get("/core/ageGroup/", {cancelToken: token});
    }

    /**
     *
     * @returns {Promise}
     * @param label
     */
    async postAgeGroup(label) {
        return await this.client.post("/core/ageGroup/", {label});
    }

    /**
     *
     * @param token
     * @returns {Promise}
     */
    async getCouchList(token) {
        return await this.client.get("/core/trainer/", {cancelToken: token});
    }

    /**
     * смена тренера у группы
     *
     * @returns {Promise}
     */
    async changeCouch(id, couch) {
        return await this.client.put(`/schedule/lesson/${id}/`, {trainer_id: couch})
    }

    /* для страницы добавления взрослого клиента */

    /**
     * Получение списка групп доступных для взрослого клиента
     *
     * @returns {Promise}
     */
    async getGroupForAdult() {
        return await this.client
            .get("/group_list_adult")
            .then((r) => r.data.dataSelectAdultGroup)
            .catch((e) => {
                if (axios.isCancel(e)) {
                    return e.message;
                } else {
                    console.log(e);
                }
            });
    }

    /**
     * Получение списка филиалов для клиента
     *
     * @param token
     * @returns {Promise}
     */
    async getFilialList(token) {
        return await this.client.get("/filial_list", {cancelToken: token});
    }

    /* для добавления ребенка */
    async postAddClient(client) {
        return await this.client.post('/client/', {...client})
    }
async createTrain(data) {
        return await this.client.post('/schedule/train/', {...data})
    }

    // async postAddAdult(adult) {
    //     return await this.client.post('/client/createAdult/', {...adult})
    // }

    /**
     * Получение списка групп доступных для ребенка
     *
     * @returns {Promise}
     */
    async getGroupForChild() {
        return await this.client
            .get("/group_list_child")
            .then((r) => r.data.dataSelectChildGroup)
            .catch((e) => {
                if (axios.isCancel(e)) {
                    return e.message;
                } else {
                    console.log(e);
                }
            });
    }

    /* для профиля */

    async getAbonimentList(token) {
        return await this.client.get("/subscription/rate/", {cancelToken: token});
    }

    async getAbonimentWithId(id) {
        return await this.client.get(`/subscription/rate/${id}`);
    }

    async removeAbonementWithId(id) {
        return await this.client.delete(`/subscription/rate/${id}`);
    }


    async sendNewAbonementWithPrice(data) {
        return await this.client.post("/subscription/rate/",{...data});
    }

    async getPriceList(token, abonement, status) {
        return await this.client.get("/get_price", {cancelToken: token}).then(r => {
            let priceList, result;
            if (abonement <= 4) {
                priceList = r.data.find(item => item.abonement === abonement);
                result = priceList.priceList.find(item => item.id === status);
            } else {
                result = r.data.find(item => item.aboniment === abonement);
            }
            return result.price;

        });
    }

    /* для списка клиентов */
    async getAllClients() {
        const source = CancelToken.source()
        const request = await this.client.get("/client/", {cancelToken: source.token});
        // return await this.client.get("/client/", {cancelToken: token});
        request[CANCEL] = () => source.cancel();
        return request;
    }

    async getTypeList(token) {
        return await this.client.get("/get_types_for_all", {cancelToken: token});
    }

    async getStatusListForClients(token) {
        return await this.client.get("/subscription/cardLevel/", {cancelToken: token});
    }

    async getSortListForClients(token) {
        return await this.client.get("/get_sort_for_all", {cancelToken: token});
    }

    /* отмена операциии запроса, не тестил, может не работать */

    /**
     * Отмена операции запроса для axios
     * @returns {void}
     */
     abortAxiosCalling(){
         this.source.cancel('загрузка отменена');
    }
    //
    // isCancel(some) {
    //     this.client.isCancel(some);
    // }

    /* для страницы профиля */

    async getStatusList(token) {
        return await this.client.get("/subscription/cardLevel/", {  cancelToken: token});
    }
}

export default new Api();
