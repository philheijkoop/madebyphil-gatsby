import * as React from 'react'
import Layout from '../components/layout'

const EventPage = () => {
    return (
        <Layout pageTitle="Events">
            <p>This is an incomplete list of presentations I have given (I will try to add to it, but backfilling is not likely to happen). All events listed as date - venue - presentation title, if there's a link to the recording the presentation title will link to it.</p>
            <ul>
                <li>2021-12-08  - Canadian ACE - Have a Holly Jolly Jira</li>
                <li>2021-12-07 - ServiceRocket Educational Sessions - Manage Complex Projects with Structure for Jira</li>
                <li>2021-11-18 - NYC ACE - <a href="https://ace.atlassian.com/events/details/atlassian-new-york-presents-state-of-the-marketplace-and-atlassian-partner-tools-spotlight/">Clarify Jira Projects with Structure</a></li>
                <li>2021-10-28 - Boston ACE - <a href="https://ace.atlassian.com/events/details/atlassian-boston-presents-boston-ace-atlassian-apptoberfest-appy-hour-app-crawl/">Lightning Demo Structure for Jira</a></li>
                <li>2021-10-19 - Winnipeg ACE - <a href="https://ace.atlassian.com/events/details/atlassian-winnipeg-presents-cross-team-project-management-for-jira-cloud/">Cross-team project management for Jira Cloud</a></li>
                <li>2021-10-05 - Trundl Jiracon - <a href="https://www.youtube.com/watch?v=LPCUAgzUt2k">Managing Complex Projects with Jira Cloud</a></li>
                <li>2021-10-05 - Trundl Jiracon - AMA with a PPM expert</li>
                <li>2021-10-05 - Trundl Jiracon - Striking a Balance: How to Empower Agile Teams + Keep Projects Organized</li>
                <li>2021-09-16 - Expr Bootcamp Session 2 - <a href="https://www.youtube.com/watch?v=Av6XEPkHZVI">Advanced Use Cases with Formulas in Structure for Jira</a></li>
                <li>2021-04-28 - Go To Market Podcast - <a href="https://gotomarketpodcast.com/2021/04/28/episode-8-phil-heijkoop-growing-through-customer-obsession-partners-and-feedback-loops/">Growing through feedback loops, customer obsession and partnerships</a></li>
                <li>2021-04-15 - Denver ACE - <a href="https://ace.atlassian.com/events/details/atlassian-denver-presents-denver-ace-april-15th-2021-with-alm-works/">Use Jira to plan, adapt, and deliver at Scale</a></li>
            </ul>
        </Layout>
    )
}

export default EventPage