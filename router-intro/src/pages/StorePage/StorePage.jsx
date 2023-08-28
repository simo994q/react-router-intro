import { ContentSection } from "../../components/ContentSection/ContentSection"
import style from './StorePage.module.scss'

export function StorePage() {
    return (
        <ContentSection pageTitle='Store'>
            <section className={style.homePageWrapper}>
                <p>Welcome</p>
                <p>This is the store page</p>
            </section>
        </ContentSection>
    )
}