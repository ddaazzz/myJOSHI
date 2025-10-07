

import type { FC } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';

interface ContestantModalProps {
    isShow: boolean;
    onHide: () => void;
}

const ContestantModal: FC<ContestantModalProps> = (props) => {

    return (
        <Modal size="lg" centered show={props.isShow} onHide={() => props.onHide()}>
            {/* <Modal.Header closeButton className="tw-bg-yellow-100 contestant-modeal-header" /> */}
            <Modal.Body className="bg-1" >
                <Row className="md:tw-px-16 tw-px-0 md:tw-pt-16 tw-pt-4" >
                    <Col md={3} xs={12} className="align-self-center text-center">
                        <Image src="/img/1.png" alt="Contestant profile" className='contestant-modal-profile' width={200} height={200} />
                    </Col>
                    <Col md={9} xs={12} className="align-self-center">
                        <p className='text-black tw-mb-0'>10 號參賽者</p>
                        <h2 className="text-black tw-mt-0 tw-mb-4">Summer LAI</h2>
                        <Button size="lg">立即投票</Button>
                    </Col>
                </Row>
                <Row className="md:tw-px-16 tw-px-0 md:tw-pt-16 tw-pt-4 tw-mb-16 " >
                    <p className="tw-text-black tw-font-light">
                        Hellooo我係summer 可以叫我sumsum。依家 係墨爾本大學讀緊year 2 Architecture。
                        我好鍾意跳舞同表演。我細個已經會成日同阿妹排完隻舞自己係屋企跳，甚至係迪士尼睇完米奇老鼠頒獎典禮會一五一十同細妹一齊表演返出黎。中學既時候同啲朋友諗住玩下talent show表演唱歌，因為平時係班房我地都成日當自己開演唱會唱唔停，點知又真係比我地誤打誤撞入埋final。我好記得每次練習同表演完個種滿足感係其他地方比唔到我。
                        kpop可以話已經滲透曬我成個中學生涯，我都好明白所有idol都係經過漫長又嚴厲既訓練先可以出道到，所以如果揀中咗我，我係一定會全力以赴同埋付出更多時間同努力。我絕對唔會退縮既，我要入女團！V
                    </p>
                    <h2 className='tw-mt-8 tw-mb-4'>投稿影片</h2>
                    <iframe width="720" height="500" src="https://www.youtube.com/embed/BA7fdSkp8ds" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default ContestantModal;
