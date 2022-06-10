// import logo from './logo.svg';
import apple from "@/assets/apple.png";
import link1 from "@/assets/contact/1.png";
import link2 from "@/assets/contact/2.png";
import link3 from "@/assets/contact/3.png";
import link4 from "@/assets/contact/4.png";
import demo from "@/assets/demo.png";
import android from "@/assets/download/android.png";
import ios from "@/assets/download/ios.png";
import google from "@/assets/google.png";
import ic_part1 from "@/assets/ic-part1.png";
import ic_part2 from "@/assets/ic-part2.png";
import ic_part3 from "@/assets/ic-part3.png";
import ic_part4 from "@/assets/ic-part4.png";
import logo from "@/assets/logo.png";
import logo_h from "@/assets/logo_h.png";

import scan from "@/assets/scan.png";
import team1 from "@/assets/team/1.png";
import team2 from "@/assets/team/2.png";
import team3 from "@/assets/team/3.png";

import line from "@/assets/roadmap/line.png";
import line0 from "@/assets/roadmap/line0.png";
import line1 from "@/assets/roadmap/line1.png";
import contact1 from "@/assets/contact2.png";

import en_US from "@/locals/en_US";
import zh_CN from "@/locals/zh_CN";
import { Form, Input, Button, Message } from "element-react";
import React, { useState, useRef } from "react";
import { IntlProvider } from "react-intl";
import "./App.scss";
import "element-theme-default";
import { post } from "@/utils/request";

const data = {
  zh: zh_CN,
  en: en_US,
};
const lan = [
  {
    label: "中文",
    value: "zh",
  },
  {
    label: "English",
    value: "en",
  },
];
const rectangle = [
  {
    bg: "#6bd99c",
    bg_border: "rgba(58, 195, 146, 0.2)",
    value: "2020 万向黑客马拉松 获赞助商 Acala 特别奖",
  },
  {
    bg: "#FAC03D",
    bg_border: "rgba(220, 152, 0, 0.2)",
    value: "2020 万向黑客马拉松 获赞助商 Acala 特别奖",
  },
  {
    bg: "#FF5A5A",
    bg_border: "rgba(214, 28, 28, 0.1)",
    value: "2020 万向黑客马拉松 获赞助商 Acala 特别奖",
  },
];
const icPartBox = [
  {
    avatar: ic_part2,
    title: "Wallet for Safely store and flash trading",
    describe: " ICWallet supported all digital assets about Internet Computer",
  },
  {
    avatar: ic_part3,
    title: "NFT Trading Market ",
    describe: "Supported most markets about NFT transfer/listing/wrap/unwrap",
  },
  {
    avatar: ic_part4,
    title: "DAO & DEX native supports",
    describe: "GameFi,DAO protocol and all digital assets trading & exchange",
  },
];
const teams = [
  {
    avatar: team3,
    info: "Nehal is Co-founder at icwallet.org. where he is responsible for the technology underpinning Blckchain services.",
    name: "Nehal Ahmad",
    position: "——Co-funder",
    fb: "https://www.facebook.com/nehal.ahmad.7587",
  },
 
  {
    avatar: team2,
    info: "Kent has nearly a decade of experience in applied data science in a variety of industries with a concentration in the insurance industry.",
    name: "Kent Thomas",
    position: "——Co-funder",
    fb: "https://www.facebook.com/profile.php?id=100072297714929",
  },
  {
    avatar: team1,
    info: "Daniel worked as a DevOps, SRE, and back-end software development engineer. He has a scientific mindset and 15 years of experience working with global startups.",
    name: "Daniel Boubet",
    position: "——NFT Consultant",
    fb: "https://www.facebook.com/danielcritter",
  },
  
];
const roadmap = [
  {
    time: "2020 Q4",
    node: "2020年",
    yet: true,
    title: "万向黑客马拉松 获赞助商 Acala 特别奖",
    desc: "2020 Million direction Hackathon won Acala Special Award from sponsor",
  },
  {
    time: "2021 Q1",
    node: "2021年",
    yet: true,
    title: "万向黑客马拉松 获赞助商 Acala 特别奖",
    desc: "2020 Million direction Hackathon won Acala Special Award from sponsor",
  },
  {
    time: "2020 Q4",
    node: "2020年",
    yet: false,
    title: "万向黑客马拉松 获赞助商 Acala 特别奖",
    desc: "2020 Million direction Hackathon won Acala Special Award from sponsor",
  },
  {
    time: "2020 Q4",
    node: "2020年",
    yet: false,
    title: "万向黑客马拉松 获赞助商 Acala 特别奖",
    desc: "2020 Million direction Hackathon won Acala Special Award from sponsor",
  },
];
function App() {
  const [lang, setlang] = useState(navigator.language.split(/[-_]/)[0]);
  // const form1 = useRef(null);
  const changeLocale = (e) => {
    console.log(e.target.value);
    setlang(e.target.value);
  };
  const [form, setForm] = useState({
    email: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    let reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
    if (!reg.test(form.email)) {
      Message({
        message: "Please input the correct email address！",
        type: "warning",
      });
      return;
    }
    console.log(form, JSON.stringify(form), "form");

    fetch("https://navapi.icwallet.org/email", {
      method: "POST",
      headers: {
        // 'Content-Type': 'application/json',
        // Accept: 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((data) => {
        if (!data.ok) {
          throw Error(data.status);
        }
        return data.json();
      })
      .then((update) => {
        console.log(update);
        if (update?.code === 0) {
          Message({
            message: "Successful operation！",
            type: "success",
          });
          setForm({ email: "" });
        } else {
          Message.error("Operation failed!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <IntlProvider messages={data[lang]} locale={lang}>
      <div className="App">
        {/* header */}
        <header className="App-header">
          <div className="content">
            <div className="logo">
              <div className="img">
                <img src={logo_h} />
              </div>
              <div className="logo-title">
                <span>IC Wallet</span>
                <span>Your Gateway to Dfinity and Web3.0 World.</span>
              </div>
            </div>
            <div className="header-right">
              <a target="_blank" href="https://twitter.com/icwallet">
                <img src={link3} />
              </a>
              <a target="_blank" href="https://discord.com/invite/DqCeHU8rem">
                <img src={link2} />
              </a>
              <a target="_blank" href="https://t.me/ICwallet01">
                <img src={link4} />
              </a>
              <a target="_blank" href="https://github.com/ICWallet-org">
                <img src={link1} />
              </a>
            </div>
          </div>
        </header>
        {/* banner */}
        <section className="App-banner">
          <div className="banner">
            <div className="banner-left">
              <span className="banner-btn1">ICWallet APP</span>
              <h3>Your Gateway to Dfinity Ecosystem</h3>
              <p className="desc">
                ICWallet is a feature-rich digital wallet to securely
                <br /> manage ICP asset .
              </p>
              <span className="scan">
                <img src={scan} />
                Scan the QR code through your browser
              </span>
              <div className="download-box">
                <div>
                  <a
                    target="_blank"
                    href="https://testflight.apple.com/join/hvj91hXP"
                  >
                    <img src={apple} className="download-btn" />
                  </a>
                  <div className="download-code">
                    <img src={ios} />
                  </div>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1jbxAVSfM7g3-dfJF_ciyFVFAiP4IETRR/view?usp=sharing"
                  >
                    <img src={google} className="download-btn" />
                  </a>
                  <div className="download-code">
                    <img src={android} />
                  </div>
                </div>
              </div>
              <div className="download-box-im">
                <a href="https://testflight.apple.com/join/hvj91hXP">
                  <img src={apple} className="download-btn" />
                </a>
                <a href="https://drive.google.com/file/d/1jbxAVSfM7g3-dfJF_ciyFVFAiP4IETRR/view?usp=sharing">
                  <img src={google} className="download-btn" />
                </a>
              </div>
            </div>
            <div className="banner-right">
              <img src={demo} />
            </div>
          </div>
        </section>

        {/* ic-part1 */}
        <section className="ic-part1">
          <div className="left">
            <p>
              Decentralized financial, management and
              <br />
              treasury (DAO) protocols, flash trading, low
              <br />
              gas fee, safely store all digital assets.
            </p>
          </div>
          <div className="right">
            <img src={ic_part1} />
          </div>
        </section>
        {/* ic-part2 */}
        <section className="ic-part2">
          {icPartBox.map((obj, i) => {
            return (
              <div key={i} className="product">
                <div className="p-header">
                  <img src={obj.avatar} />
                </div>
                <div className="title">{obj.title}</div>
                <div className="desc">{obj.describe}</div>
              </div>
            );
          })}
        </section>
        {/* ic-part3 */}
        {/* <section className="ic-part1">
          <div className="left">
            <p>
              Developing history
              <br /> (gets credit)
            </p>
            <span>
              DNFT Protocol的算法稳定币模块通过质押Dot (Polkadot 生态代币)，获取
              <br />
              dUSD (DNFT Protocol生态稳定币)
            </span>
          </div>
          <div className="right">
            <img src={ic_part1} />
          </div>
        </section> */}
        {/* ic-part4 */}
        {/* <section className="roadmap">
          <div className="roadmap_title">Road Map</div>
          <div className="box">
            <div className="subtitle">
              The road map for ICWallet developing history.
            </div>
            <div className="path">
              <div className="path_line">
                <div className="path1">
                  <span>2021.Q3</span>
                  <div className="round">
                    <div className="round1">
                      <div />
                    </div>
                  </div>
                  <div className="desc">
                    Beta Test Version
                    <br />
                    Released
                  </div>
                </div>
                <div className="path1">
                  <span className="current">2021.Q4</span>
                  <div className="round">
                    <div className="round1">
                      <div className={"current1"} />
                    </div>
                  </div>
                  <div className="desc">
                    ICWallet DAO Start & NFT
                    <br />
                    Support
                  </div>
                </div>
              </div>

              <div className="path_line">
                <div className="path1">
                  <span>2022.Q2</span>
                  <div className="round">
                    <div className="round1">
                      <div />
                    </div>
                  </div>
                  <div className="desc">
                    Dfinity Dex & Dfinity Stable Coin <br />& Solana Chain
                    support.
                  </div>
                </div>
                <div className="path1">
                  <span>2022.Q1</span>
                  <div className="round">
                    <div className="round1">
                      <div />
                    </div>
                  </div>
                  <div className="desc">
                    Official Version Released &
                    <br />Dfinity NFT Store & BSC Chain Support
                  </div>
                </div>
              </div>
              <div className="path_line">
                <div className="path1">
                  <span>2022.Q3</span>
                  <div className="round">
                    <div className="round1">
                      <div />
                    </div>
                  </div>
                  <div className="desc">
                    Dfinity Gaming Store & Ethereum <br /> Chain support.
                  </div>
                </div>
                <div className="path1">
                  <span>2022.Q4</span>
                  <div className="round">
                    <div className="round1">
                      <div />
                    </div>
                  </div>
                  <div className="desc">
                    Dfinity Metaverse &<br />
                    Bitcoin Chain support.
                  </div>
                </div>
              </div>
              <img src={line} className={"line_bg"} />
              <img src={line0} className={"line_bg0"} />
              <img src={line1} className={"line_bg1"} />
            </div>
          </div> */}
          {/* <div className="line" /> */}
          {/* {roadmap.map((obj, i) => {
            return (
              <div key={i} className="project">
                <div className="time">{obj.time}</div>
                {obj.yet ? (
                  <div className="node">{obj.node}</div>
                ) : (
                  <div className="yetTime">
                    <div />
                  </div>
                )}

                <div className="title">{obj.title}</div>
                <div className="desc">{obj.desc}</div>
              </div>
            );
          })} */}
        {/* </section> */}
        {/* ic-part5 */}
        {/* <section className="ic-part1">
          <div className="left">
            <p>
              lets work together
              <br /> efficiently and
              <br /> remotely
            </p>
            <span>
              公开团队成员，其母公司 DNFT FOUNDATION PTY LTD 的成员包括:
            </span>
          </div>
          <div className="right">
            <img src={ic_part1} />
          </div>
        </section> */}
        {/* ic-part6 */}
        {/* <section className="ic-part6">
          {teams.map((obj, i) => {
            return (
              <div key={i} className="part">
                <img className="img" src={obj.avatar} />
                <div className="contact">
                  <div className="left">
                    <div className="one">
                      <div className="name">{obj.name}</div>
                      <div className="position">{obj.position}</div>
                    </div>
                  </div>
                  <div className="right">
                    <a href={obj.fb} target="_blank">
                      <img src={contact1} />
                    </a>
                  </div>
                </div>
                <div className="info">{obj.info}</div>
              </div>
            );
          })}
        </section> */}
        <div className="email_form">
          <div style={{ paddingLeft: 23 }}>Receive our Newsletter</div>
          <Input
            className="email2"
            style={{ width: "40vw", margin: 20 }}
            placeholder="Please fill in your email address"
            value={form.email}
            onChange={(e) => {
              setForm({
                email: e,
              });
            }}
          ></Input>
          <Input
            className="email1"
            style={{ width: "60vw", margin: 20 }}
            placeholder="Please fill in your email address"
            value={form.email}
            onChange={(e) => {
              setForm({
                email: e,
              });
            }}
          ></Input>
          <Button onClick={onSubmit} nativeType="submit" type="primary">
            Subscribe
          </Button>
        </div>
        {/* footer */}
        {/* <footer>
          <div className="left">
            <img className="logo" src={logo1} />
            <div className="info">
              We provide information about properties such
              <br /> as houses, villas and apartments to help people
              <br /> find their dream home
            </div>
            <div className="contact">
              <img src={foot_ins} />
              <img src={foot_facebook} />
              <img src={foot_twitter} />
            </div>
          </div>
          <div className="right">
            <div className="item">
              <p>Property</p>
              <a>House</a>
              <a>Apartment</a>
              <a>villa</a>
            </div>
            <div className="item">
              <p>Article</p>
              <a>New Article</a>
              <a>Popular Article</a>
              <a>Most Read</a>
              <a>Tips & Tricks</a>
            </div>
            <div className="item">
              <p>Contact</p>
              <a>2464 Royal Ln. Mesa, New Jersey 45463</a>
              <a>(671) 555-0110</a>
              <a>info@hounter.com</a>
            </div>
          </div>
        </footer> */}
      </div>
    </IntlProvider>
  );
}

export default App;
