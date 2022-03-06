import * as React from 'react'
import Page from "../components/page";

const LegalPage = () => {
    return (
        <Page>
            <main className="p-10">
                <title>Legal Notice</title>

                <h1>Legal Notice</h1>
                <h3>Information according to § 5 TMG</h3>
                <p>
                    Lorey Ventures UG (haftungsbeschränkt)<br/>
                    Sperrlohestr. 29<br/>
                    97996 Niederstetten<br/>
                    Germany
                </p>

                <p>
                    Represented by:<br/>
                    Karl Lorey
                </p>

                <h3>Contact</h3>
                <p>
                    Phone: +49 (O) I52 / O84O 784O<br/>
                    Fax: it's 2022<br/>
                    E-Mail: mail (ät) karllorey (dot) com
                </p>

                <p>
                    Entry in (German) Handelsregister<br/>
                    Register Court: Local Court of Stuttgart (Amtsgericht Stuttgart)<br/>
                    Register Number: HRB 780286
                </p>

                <p>
                    VAT ID: DE343048233
                </p>

                <h2>Disclaimer</h2>

                <h3>Accountability for content</h3>
                <p>
                    The contents of our pages have been created with the utmost care.
                    However, we cannot guarantee the contents' accuracy, completeness or topicality.
                    According to statutory provisions, we are furthermore responsible for our own content on these web pages.
                    In this context, please note that we are accordingly not obliged to monitor merely the transmitted or saved information of third parties,
                    or investigate circumstances pointing to illegal activity.
                    Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
                </p>

                <h3>Accountability for links</h3>
                <p>
                    Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages.
                    No violations were evident to us at the time of linking.
                    Should any legal infringement become known to us, we will remove the respective link immediately.
                </p>

                <h2>Copyright</h2>
                <p>
                    Our web pages and their contents are subject to German copyright law.
                    Unless expressly permitted by law (§ 44a et seq. of the copyright law), every form of utilizing, reproducing or processing works subject to copyright protection on our web pages
                    requires the prior consent of the respective owner of the rights.
                    Individual reproductions of a work are allowed only for private use,
                    so must not serve either directly or indirectly for earnings.
                    Unauthorized utilization of copyrighted works is punishable (§ 106 of the copyright law).
                </p>
            </main>
        </Page>
    )
}

export default LegalPage