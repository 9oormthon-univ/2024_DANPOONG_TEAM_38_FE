import {ReactComponent as EventPageIcon} from "../../assets/event/EventPageIcon.svg";

const Event = () => {
    return (
        <div className='flex flex-col items-center gap-y-7 justify-center' style={{minHeight:'calc(100vh - 274px)'}}>
            <EventPageIcon/>
            <div>
                <p className='text-2xl font-semibold'>아직 준비 중이에요🥲 <br/>
                    조금만 기다려주세요!
                </p>
            </div>
        </div>
    );
};

export default Event;
