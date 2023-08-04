import React from "react";
import { footerText } from "../constants";

function Footer() {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footerInner">
        <div className="footerText">
          <span>React</span>
          <span>@webs</span>
        </div>
        <div className="footerInfo">
          <div className="left">
            <div className="title">
              <a href="/">sign up</a>
            </div>
            <p>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
            <div>
              <h3>아래 사이트를 참고하여 만들어진 포트폴리오 입니다.</h3>
              <hr />
              <a href="https://webstoryboy.co.kr/">
                https://webstoryboy.co.kr/
              </a>
            </div>
          </div>
          <div className="right">
            <h3>social</h3>
            <ul>
              {footerText.map((footer, key) => (
                <li key={key}>
                  <a href={footer.link}>{footer.title}</a>
                  <em>{footer.desc}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footerRight">
          © 2023
          <br />이 사이트는 리액트를 이용하여 제작하였습니다.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
