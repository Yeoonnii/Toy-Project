import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handlePage = (targetUrl) => {
    navigate(targetUrl);
  };
  
  return (
    <div>
      <h3>SignUp</h3>
      <hr />
      <br />
      <div>
        <label>아이디 : </label>
        <input type="text" maxLength={15} name="id" />
      </div>
      <div>
        <label>비밀번호 : </label>
        <input type="password" maxLength={20} name="password" />
      </div>
      <div>
        <label>비밀번호 확인 : </label>
        <input type="password" maxLength={20} name="passwordCheck" />
      </div>
      <div>
        <label>이름 : </label>
        <input type="text" maxLength={10} name="name" />
      </div>
      <div>
        <label>닉네임 : </label>
        <input type="text" maxLength={20} name="nickname" />
      </div>
      <div>
        <label>연락처 : </label>
        <input type="text" maxLength={15} name="phone" />
      </div>
      <div>
        <label>생년월일 : </label>
        <input type="date" maxLength={15} name="birth" />
      </div>
      <div>
        <label>주소 : </label>
        <input type="text" maxLength={100} name="address" />
      </div>
      <hr />
      <button>가입하기</button>&nbsp;
      <button onClick={() => handlePage("/")}>홈화면</button>
    </div>
  );
};

export default SignUp;
