import React from 'react';
import './LifeJourney.css';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const LifeJourney = () => {
	return (
		<section id="count-area" class="py-70 text-center">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 pb-5">
						<h2 className="title text-white">Life's Journey</h2>
						<p className="text-light">I never sleep when i'm tired, I sleep only when i'm Done!</p>
					</div>
				</div>
				<div class="row d-none d-lg-flex">
					<div class="col-lg-3">
						<div class="count-wrap">
							<div class="number-wrap">
								<i class="fas fa-handshake"></i>
								<span className="counter"> <CountUp end={150} redraw={true}>
									{({ countUpRef, start }) => (
										<VisibilitySensor onChange={start} delayedCall>
											<span ref={countUpRef} />
										</VisibilitySensor>
									)}
								</CountUp>+</span>
							</div>
							<span>PROJECTS COMPLETED</span>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="count-wrap">
							<div class="number-wrap">
								<i class="fas fa-heart"></i>
								<span className="counter"><CountUp end={100} redraw={true}>
									{({ countUpRef, start }) => (
										<VisibilitySensor onChange={start} delayedCall>
											<span ref={countUpRef} />
										</VisibilitySensor>
									)}
								</CountUp>+</span>
							</div>
							<span>HAPPY CLIENTS</span>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="count-wrap">
							<div class="number-wrap">
								<i class="far fa-moon"></i>
								<span className="counter">
								<CountUp end={500} redraw={true}>
									{({ countUpRef, start }) => (
										<VisibilitySensor onChange={start} delayedCall>
											<span ref={countUpRef} />
										</VisibilitySensor>
									)}
								</CountUp>+</span>
							</div>
							<span>SLEEPLESS NIGHTS</span>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="count-wrap">
							<div class="number-wrap">
								<i class="fas fa-trophy"></i>
								<span className="counter"><CountUp end={50} redraw={true}>
									{({ countUpRef, start }) => (
										<VisibilitySensor onChange={start} delayedCall>
											<span ref={countUpRef} />
										</VisibilitySensor>
									)}
								</CountUp>+</span>
							</div>
							<span>WINNING AWARDS</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LifeJourney;
