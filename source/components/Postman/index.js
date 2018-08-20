import React, { Component } from 'react';
import postmanAvatar from "../../theme/assets/homer.png";

import Styles from './styles.m.css';

import { withProfile } from "../../hoc/withProfile";
import { Transition } from "react-transition-group";
import gsap from "gsap";

export class PostMan extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        // this.state = {
        //     showed: false,//!(window.localStorage.getItem("postmanTimer")-Date.now()>0),
        //     delay: 20
        // };
    }
    state = {
        showed:true,
        delay:20
    }
    animatePostmanEnter = (item) => {
        gsap.fromTo(
            item, 0.5,
            {
                opacity: 0,
                x:500,
            },
            {
                opacity: 1,
                x:0,
            }
        );
    };
    animatePostmanExit = (item) => {
        console.log("POSTMAN EXIT ANIMATIONS")
        const {delay} = this.state;
        let alarmTime = window.localStorage.getItem("postmanTimer")-Date.now();
        if (alarmTime<0) window.localStorage.setItem("postmanTimer", Date.now()+delay*1000);
        gsap.fromTo(
            item, 0.5,
            {
                opacity: 1,
                x:0,
            },
            {
                opacity: 0,
                x:500,
                onComplete:()=>{
                    console.log("POSTMAN", "HIDDEN");
                    this.setAlarm(delay);
                }
            }
        );
    };

    setAlarm=(delay)=>{
        setTimeout(()=>{
            this.setState({showed:true})
        }, this.state.delay*1000);
    }

    componentDidMount() {
        const {delay}=this.state;
        let alarmTime = window.localStorage.getItem("postmanTimer")-Date.now();
        alarmTime=(alarmTime<0)?0:alarmTime;
        if (alarmTime>0) {
            console.log("POSTMAN", alarmTime/1000);
            this.setState({showed:false})
            setTimeout(()=>{
                this.setState({showed:true})
            }, alarmTime);
        } else {
            this.setState({showed:true})
        }
    }

    render () {
        const { currentUserFirstName } = this.props;
        const { showed } = this.state;
        return (
            <Transition
                appear
                in={showed}
                timeout={2000}
                onEnter={this.animatePostmanEnter}
                onExit={this.animatePostmanExit}
            >
                <section className={Styles.postman} onClick={()=>{this.setState({showed:false})}}>
                    <img src={postmanAvatar}/>
                    <span>Hello, {currentUserFirstName}</span>
                </section>
            </Transition>
        );
    }
}

export default withProfile(PostMan);
