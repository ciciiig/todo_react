import "./Register.css"
import { FC } from "react"
import { useRef, useState, useEffect } from "react"

const MAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

export const Register: FC = () => {
    const userRef = useRef<HTMLInputElement | null>(null)
    const errRef = useRef<HTMLInputElement | null>(null)

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if (userRef.current) {
            userRef.current.focus();
        }
    }, [])

    useEffect(() => {
        const result = MAIL_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidName(result)
    }, [user])

    useEffect(() => {
        const result = PASSWORD_REGEX.test(password)
        console.log(result)
        console.log(password)
        setValidPassword(result)
    }, [password])

    useEffect(() => {
        setErrMsg('')
    }, [user, password])

    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "hide"}>{errMsg}</p>
            <h1>Register</h1>
            <form>
                <label htmlFor="username">
                    Username:
                    <span className={validName ? "valid" : "hide"}>✔
                    </span>
                    <span className={validName || !user ? "hide" : "invalid"}>✘
                    </span>
                </label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    required
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <p className={userFocus && user && !validName ? "instructions" : "hide"}>
                    Valid Email only
                </p>

                <label htmlFor="password">
                    Password:
                    <span className={validPassword ? "valid" : "hide"}>✔
                    </span>
                    <span className={validPassword || !password ? "hide" : "invalid"}>✘
                    </span>
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                />
                <p className={passwordFocus && !validPassword ? "instructions" : "hide"}>
                    - at least 8 characters<br />
                    - must contain at least 1 uppercase, lowercase and number<br />
                    - Can contain special characters
                </p>
            </form>
        </section>
    )
}