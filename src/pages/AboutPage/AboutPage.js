import Page from '../../components/Page'
import './AboutPage.scss'

const AboutPage = ({
    currentActivePage
}) => (
    <Page 
        active={currentActivePage === 'ABOUT'}>
        <div id="aboutBanner" class="container d-flex justify-content-between flex-wrap">
            <h1>蕭雨軒
                <span class="enVersion">Hsiao Yu-Hsin</span><br/>
                <span class="jpVersion">ショウ　ウケン</span>
            </h1>
            <h2><span class="jpVersion">An Artist / Interior Designer <br/>
                    based in Tokyo, Japan</span><br/>
                <span class="enVersion">アーティスト / インテリアデザイナー<br/>
                    東京､ 日本</span><br/>
            </h2>
        </div> 
        <div class="aboutCV container">
            <div id="bio" class="cvBox">
                <h3>Bio</h3>
                <p>Born and raised in Taiwan, and went to Tokyo, Japan in 2016. As an Artist & Designer, passionate about
                    Fine Art, Spatial Design, and Furniture Design. Observe and create connections between people and
                    space, enriching our lives and providing practical usages. Now, work in an architecture firm in Tokyo,
                    Japan.</p>
            </div>
            <div id="education" class="cvBox">
                <h3>Education</h3>
                <p>2020 Graduated from Kuwasawa Design School | Spatial Design, Tokyo, Japan<br/>
                    2015 Graduated from National Hsinchu University of Education (<i>now National Tsing Hua University</i>)|
                    Arts & Design, Hsinchu, Taiwan
                </p>
            </div>
            <div id="exhibitions" class="cvBox">
                <h3>Group Exhibitions</h3>
                <p>2020 《Graduation Exhibition | Kuwasawa 2020》, Kuwasawa Design School, Tokyo, Japan (Online)<br/>
                    2015 《Incubation Period》, Chushin artspace, Hsinchu, Taiwan<br/>
                    2015 《Incubation Period》, About Freedom Men Art Apartments, Taichung, Taiwan<br/>
                    2015 《Incubation Period》, Hsinchu Culture Center, Hsinchu, Taiwan<br/>
                    2014 《膠配》Glue-Pigment Painting，思空間，Hsinchu, Taiwan<br/>
                    2014 《Arts Marketplace》, Nhcue art space, Hsinchu, Taiwan<br/>
                    2014 《Hakka Arts Festival》，思空間，Hsinchu, Taiwan<br />
                    2014《YOUNG ART TAIPEI》, YUHSIU Art space, Taipei, Taiwan<br/>
                    2014 《非美聯展》，竹道藝廊，Hsinchu, Taiwan<br/>
                    2014 《非美聯展》，三羊所在，Hsinchu, Taiwan<br/>
                    2013 《非美聯展》，竹道藝廊，Hsinchu, Taiwan<br/>
                </p>
            </div>
            <div id="other" class="cvBox">
                <h3>Other Publications</h3>
                <a href="https://idreit.com/diploma/2020/furniture-design/planet-formula-by-hsiao-yu-hsin?fbclid=IwAR1p8ermlb_r1iSmyb434EJhp0RdEVBUSQVln17alExJtAQTYYUOa6eJV0U
                ">
                    <p>2020 PLANET FORMULA, IDREIT, Tokyo, Japan</p>
                </a>
            </div>
        </div>
    </Page>
);

export default AboutPage;
