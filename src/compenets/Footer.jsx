import React from 'react'
import { footerText } from '../constants'

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div class="footer__inner">
                <h2 class="footer__text">
                    <span>webstoryboy</span>
                    <span>© webs</span>
                </h2>
                <div class="footer__info">
                    <div class="left">
                        <div class="title">
                            <a href="/">sign up</a>
                        </div>
                        <p>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
                    </div>
                    <div class="right">
                        <h3>social</h3>
                        <ul>
                            {footerText.map((footer, key) =>(
                                <li key={key}>
                                    <a href={footerText.link}>{footer.title}</a>
                                    <em>{footer.desc}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div class="footer__right">
                    © 2023 webstoryboy<br />
                    이 사이트는 비트를 이용하여 제작하였습니다.
                </div>
            </div>
        </footer>
    )
}

export default Footer