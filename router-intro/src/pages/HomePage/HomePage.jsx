import { ContentSection } from "../../components/ContentSection/ContentSection"
import style from './HomePage.module.scss'

export function HomePage() {
    return (
        <ContentSection pageTitle='Home'>
            <section className={style.homePageWrapper}>
                <p>Welcome</p>
                <p>This is the home page</p>
            </section>
        </ContentSection>
    )
}