import "../CSS/styles.css";

export default function LoginCreatAccount() {
    return (
        <div className="login-creat-account-container">
            <div className="login-creat-account-links">
                <a href="#" rel="noopener noreferrer" className="login-link">ورود</a>
                <a href="#" rel="noopener noreferrer" className="creat-account-link">ثبت نام</a>
            </div>
            <form className="login-creat-account-form">
                <label for="phone-number"  className="enter-phone-number">.لطفا شماره موبایل خود را وارد کنید</label>
                <input type="tel" name="phone-number" className="phone-number-input"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required/>
                <input type="submit" value="ارسال کد تائید" className="verification-code-button"/>
            </form>
            <p className="conditions">.ورود به منزله قبول <a href="#" rel="noopener noreferrer" className="aimor-conditions">شرایط اِیمور</a> و <a href="#" rel="noopener noreferrer" className="privacy-policy">قوانین حریم‌خصوصی</a> است </p>
            
        </div>
    );
}
