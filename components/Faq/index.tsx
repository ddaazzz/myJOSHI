import { Accordion, Card, useAccordionButton, } from "react-bootstrap";
import { useContext } from 'react';
import Content from "../../assets/content.json";
import AccordionContext from "react-bootstrap/AccordionContext";
function AccordionToggle({ children, eventKey }: { children: any, eventKey: any }) {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey);
   
    const currentActiveKey = activeEventKey;
    return (
        <button
            type="button"
            className={`tw-text-2xl md:tw-text-3xl  tw-text-left heading-color tw-bg-transparent tw-pt-12 custom-accordion-button ${eventKey === currentActiveKey ? 'current-accordion' : ''} `}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}
function Faq(props:any){
    var content_json = Content.FAQ.filter((p) => p.locale === props.locale)[0];
    return (
        <Accordion defaultActiveKey="0" flush>
            <Card className="tw-bg-transparent accrodion-style tw-pb-12">
                <Card.Header className="tw-bg-transparent tw-border-0">
                    <AccordionToggle eventKey="0"> <span className="tw-text-3xl md:tw-text-5xl tw-mr-2">01  </span>{content_json.title_1}</AccordionToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="tw-text-1xl md:tw-text-2xl tw-bg-transparent md:tw-pl-28 md:tw-pr-12 text-color tw-pb-0 tw-text-center md:tw-text-left">
                   {content_json.content_1} </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="tw-bg-transparent accrodion-style tw-pb-12">
                <Card.Header className="tw-bg-transparent tw-border-0">
                    <AccordionToggle eventKey="1"> <span className="tw-text-3xl md:tw-text-5xl tw-mr-2">02  </span>{content_json.title_2}</AccordionToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body className="tw-text-1xl md:tw-text-2xl tw-bg-transparent md:tw-pl-28 md:tw-pr-12 text-color tw-pb-0 tw-text-center md:tw-text-left">
                    {content_json.content_2}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="tw-bg-transparent accrodion-style tw-pb-12">
                <Card.Header className="tw-bg-transparent tw-border-0">
                    <AccordionToggle eventKey="2"> <span className="tw-text-3xl md:tw-text-5xl tw-mr-2">03  </span>{content_json.title_3}</AccordionToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body className="tw-text-1xl md:tw-text-2xl tw-bg-transparent md:tw-pl-28 md:tw-pr-12  text-color tw-pb-0 tw-text-center md:tw-text-left">
                    {content_json.content_3}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="tw-bg-transparent accrodion-style tw-pb-12">
                <Card.Header className="tw-bg-transparent tw-border-0">
                    <AccordionToggle eventKey="3"> <span className="tw-text-3xl md:tw-text-5xl tw-mr-2">04  </span>{content_json.title_4}</AccordionToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body className="tw-text-1xl md:tw-text-2xl tw-bg-transparent md:tw-pl-28 md:tw-pr-12  text-color tw-pb-0 tw-text-center md:tw-text-left">
                    {content_json.content_4}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="tw-bg-transparent accrodion-style tw-pb-12">
                <Card.Header className="tw-bg-transparent tw-border-0">
                    <AccordionToggle eventKey="4"> <span className="tw-text-3xl md:tw-text-5xl tw-mr-2">05  </span>{content_json.title_5}</AccordionToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                    <Card.Body className="tw-text-1xl md:tw-text-2xl tw-bg-transparent md:tw-pl-28 md:tw-pr-12  text-color tw-pb-0 tw-text-center md:tw-text-left">
                    {content_json.content_5}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="tw-bg-transparent accrodion-style tw-pb-12">
                <Card.Header className="tw-bg-transparent tw-border-0">
                    <AccordionToggle eventKey="5"> <span className="tw-text-3xl md:tw-text-5xl tw-mr-2">06  </span>{content_json.title_6}</AccordionToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                    <Card.Body className="tw-text-1xl md:tw-text-2xl tw-bg-transparent md:tw-pl-28 md:tw-pr-12  text-color tw-pb-0 tw-text-center md:tw-text-left">
                    {content_json.content_6}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}
export default Faq;