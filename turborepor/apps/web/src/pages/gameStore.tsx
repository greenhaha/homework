import { useMemo, useState } from 'react';
import './GameStore.css';

const achievementsData = [
  {
    id: 1,
    title: '为虎作伥',
    description: '把一名不知情的受害者送至利他邪教。',
    xp: 40,
    rate: 3,
    icon: 'https://shared-static-prod.epicgames.com/epic-achievements/25e088b16a154dfbbe74d2510bdef015/b0cd075465c44f87be3b505ac04a2e46/icons/c780603c5ba36d7c916a04c221899e91'
  },
  {
    id: 2,
    title: '不可触及',
    description: 'GTA 在线模式：完成一抢劫终章任务且没有受到任何伤害。',
    xp: 30,
    rate: 23,
    icon: 'https://shared-static-prod.epicgames.com/epic-achievements/25e088b16a154dfbbe74d2510bdef015/b0cd075465c44f87be3b505ac04a2e46/icons/59c531210d0369cf57b303453d4be0e4'
  },
  {
    id: 3,
    title: '三人成伍',
    description: '让三个角色干非执行任务的至少 3 星通缉等级下存活总时间达到 3 分钟。',
    xp: 20,
    rate: 1,
    icon: 'https://shared-static-prod.epicgames.com/epic-achievements/25e088b16a154dfbbe74d2510bdef015/b0cd075465c44f87be3b505ac04a2e46/icons/6aa1c7e01b2de31fe770ed0a91a8d868'
  },
  {
    id: 4,
    title: '突袭协作',
    description: '在没有死亡且击杀至少 10 名敌人的情况下完成一场帮派攻击。',
    xp: 10,
    rate: 30,
    icon: 'https://shared-static-prod.epicgames.com/epic-achievements/25e088b16a154dfbbe74d2510bdef015/b0cd075465c44f87be3b505ac04a2e46/icons/eff3eef1f6cd0449854bc5438bedf503'
  }
];

export default function GameStore() {
  const [sortBy, setSortBy] = useState('name');
  const sortList = useMemo(() => {
    switch (sortBy) {
      case 'name':
        return [...achievementsData].sort((a, b) => a.title.localeCompare(b.title));
      case 'xb':
        return [...achievementsData].sort((a, b) => b.xp - a.xp);
      case 'progress':
        return [...achievementsData].sort((a, b) => b.rate - a.rate);
      default:
        return achievementsData;
    }
  }, [sortBy]);


  return (
    <div className='game-store'>
      <header>
        <nav className="nav">
          <div className="nav1">STORE</div>
          <div className="nav2">支持</div>
          <div className="nav3">分发</div>
        </nav>
      </header>

      <div className="container">
        <div className="container-title">
          <div className="search-bar">
            <input type="text" placeholder="搜索商城" />
          </div>
          <div className="search-bar1">探索</div>
          <div className="search-bar1">浏览</div>
          <div className="search-bar1">新闻</div>
        </div>

        <h1>Grand Theft Auto V Enhanced</h1>

        <div className="tabs">
          <div className="tab">总览</div>
          <div className="tab active">成就系统</div>
        </div>

        <div className="content">
          <div className="cover">
            <img
              src="https://cdn1.epicgames.com/offer/b0cd075465c44f87be3b505ac04a2e46/EGS_GrandTheftAutoVEnhanced_RockstarNorth_S1_2560x1440-906d8ae76a91aafc60b1a54c23fab496"
              alt="GTA V Enhanced"
            />
          </div>
          <div className="stats">
            <div className="stat">
              <span>可用成就</span>
              <strong>77 项成就</strong>
            </div>
            <div className="stat">
              <span>可用经验值</span>
              <strong>1750 经验值</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="container-second">
        <h2>成就系统</h2>

        <div className="sort">
          <label htmlFor="sort">排序方式：</label>
          <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)} >
            <option value="name">按字母顺序</option>
            <option value="xb">按经验值</option>
            <option value="progress">按解锁率</option>
          </select>
        </div>

        <div className="achievement-list">
          {sortList.map((achievement) => (
            <div className="achievement" key={achievement.id}>
              <div className="achievement-icon"> <img src={achievement.icon} alt="icon" /></div>
              <div className="achievement-details">
                <div className="achievement-title">{achievement.title}</div>
                <div className="achievement-description">
                  {achievement.description}
                </div>
                <div className="achievement-meta">
                  {achievement.xp} 经验值
                  <span className="trophy">🏆</span> {achievement.rate}% 的玩家已解锁
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>游戏</h4>
            <ul>
              <li>《Fortnite》</li>
              <li>《糖豆人》</li>
              <li>《Rocket League》</li>
              <li>《Unreal Tournament》</li>
              <li>《Infinity Blade》</li>
              <li>《Shadow Complex》</li>
              <li>《Robo Recall》</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>商城</h4>
            <ul>
              <li>Epic游戏商城</li>
              <li>Fab</li>
              <li>Sketchfab</li>
              <li>ArtStation</li>
              <li>商城退款政策</li>
              <li>商城最终用户授权协议</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>工具</h4>
            <ul>
              <li>虚幻引擎</li>
              <li>UEFN</li>
              <li>MetaHuman</li>
              <li>Twinmotion</li>
              <li>Megascans</li>
              <li>RealityScan</li>
              <li>RAD Game Tools</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>在线服务</h4>
            <ul>
              <li>Epic在线服务</li>
              <li>Kids Web Services</li>
              <li>服务协议</li>
              <li>可接受使用政策</li>
              <li>信任声明</li>
              <li>子服务商清单</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>公司</h4>
            <ul>
              <li>简介</li>
              <li>新闻室</li>
              <li>招聘</li>
              <li>学生</li>
              <li>用户研究</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>资源</h4>
            <ul>
              <li>开发者社区</li>
              <li>MegaGrants</li>
              <li>创作者支持</li>
              <li>创作者协议</li>
              <li>在 Epic Games 上分发</li>
              <li>虚幻引擎品牌指南</li>
              <li>粉丝内容政策</li>
              <li>社区守则</li>
              <li>欧盟数字服务法案咨询</li>
              <li>Epic专业支持</li>
            </ul>
          </div>
        </div>

        <div className="footer-legal-container">
          <div className="footer-legal">
            Epic Games, Inc.保留所有权利。Epic、Epic Games、Epic Games
            标志、Fortnite（堡垒之夜）、Fortnite（堡垒之夜）标志、Unreal（虚幻）<br />、Unreal Engine（虚幻引擎）、Unreal Engine（虚幻引擎）标志、Unreal
            Tournament（虚幻竞技场）以及 Unreal Tournament（虚幻竞技场）标志属于 <br />Epic Games, Inc.
            在美利坚合众国及其他地区的商标或已注册商标。其他品牌或产品名称是其各自所有者的商标。
            我们的网站可能会包含链接至由第三方运<br />营的其他网站与资源。这些链接仅为方便您使用而提供。Epic Games
            对这些网站或资源的内容没有控制权，也不会对因为您使用这些网站和资源而造成的<br />损失或伤害负责。
          </div>
          <div className="back-to-top">返回顶端 ⏶</div>
        </div>

        <div className="footer-links">
          <a href="#">服务条款</a>
          <a href="#">隐私政策</a>
          <a href="#">安全与保障</a>
          <a href="#">商城退款政策</a>
          <a href="#">发行商索引</a>
        </div>
      </footer>
    </div>
  );
}
