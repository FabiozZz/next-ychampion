import React, { useState } from 'react';
import { OtherInput } from "../ui/OtherInput/OtherInput";
import { Button } from "../ui/Buttons/Button";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "../helpers/common";
import classes from './auth.module.scss';
import {log_in} from "../../store/actions/user";
import {useSimpleInput} from "../helpers/use/useSimpleInput";


/**
 * компонент для авторизации менеджера
 * @returns {JSX.Element}
 * @constructor
 */
export const Auth = () => {

    const {error} = useSelector(state => state.user);
    const [inputError, setIError] = useState(!isEmpty(error));

    /**
     * константа и метод ее изменения, для переключения индикатора загрузки
     */

    const dispatch = useDispatch();

    const {data,change_input_name} = useSimpleInput({username:'',password:''})

    const focusInput = () => {
        setIError(false)
    };

    /**
     * прослушивание события отправки формы авторизации
     * тут идет запрос на сервер
     * @param e
     */
    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(log_in(data))
    };
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <h1 className={classes.title}>Авторизация</h1>
                <form className={classes.form_wrapper} onSubmit={handleSubmitForm}>
                    <div className={classes.form_wrapper__item}>
                        <div>
                            <OtherInput onFocus={focusInput} name={'username'} value={data?.username} setValue={change_input_name} danger={!isEmpty(error)} label={'введите login'} type={'text'} />
                            {inputError&&<span className={classes.warning_text}>Не правильно заполнен Login</span>}
                        </div>
                        <div>
                            <OtherInput onFocus={focusInput} name={'password'} value={data?.password} setValue={change_input_name} danger={!isEmpty(error)} label={'введите пароль'} type={'password'} />
                            {inputError&&<span className={classes.warning_text}>Не правильно заполнен Пароль</span>}
                        </div>
                    </div>
                    <div className={classes.form_wrapper__send}>
                        <Button factor={'success'} size={"auto"} disabled={!data?.username || !data?.password} text={'Войти'} type={'submit'} />
                    </div>
                </form>
            </div>
        </div>
    );
};