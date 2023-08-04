import React from "react";
import { siteText } from "../constants";

function Site() {
  return (
    <section id="site">
      <div className="siteInner">
        <h2 className="siteTitle">
          Site coding
          <em>작업물</em>
        </h2>
        <div className="siteWrap">
          {siteText.map((site, index) => (
            <article className={`siteItem s${index + 1}`} key={index}>
              <span className="num">{index + 1}.</span>
              <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
                <div>{site.text[2]}</div>
              </div>
              <h3 className="title">웹 표준을 준수한 사이트 제작</h3>
              <div className="btn">
                <a href={site.code}>code</a>
                <a href={site.view}>view</a>
              </div>
              <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Site;
