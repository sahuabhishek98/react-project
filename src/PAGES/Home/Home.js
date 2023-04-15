import TopPost from '../../COMPONENTS/TopPostData/API-DATA/TopPost'
import LatestArticle from './LatestArticle';
import ArticleContent from '../../COMPONENTS/ArticleContent/ArticleContent'
import BlogPost from '../../COMPONENTS/BlogPost/BlogPost'
import Ads from '../../COMMON/Ads'
import Pic from '../../COMPONENTS/Images'
const Home = () => {
    return (
        <div>
            <div id="mediaTop">
                <ArticleContent />
            </div>
            <div id="latest">
                <BlogPost Title="Latest Blogs" />
            </div>
            <div id="center">
                <LatestArticle Title="Latest-Article" />
                <Pic />
                <div id="Right-Main">
                    <Ads />
                    <TopPost />
                </div>
                <br/><br/>
                <div id="end" style={{paddingBottom:"30px"}}>
                    <BlogPost Title="Latest-Stories" />
                </div>
            </div>
        </div>
    )
}
export default Home;