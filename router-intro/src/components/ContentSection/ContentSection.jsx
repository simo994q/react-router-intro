import { useEffect } from "react"
import style from './ContentSection.module.scss'

export function ContentSection (props) {

    return (
        <>
            <div className={style.contentSectionWrapper}>
                <h1>{props.pageTitle}</h1>
                <section>
                    {props.children}
                </section>
            </div>
        </>
    )

}