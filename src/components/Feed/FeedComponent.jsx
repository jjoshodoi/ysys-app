import React from 'react'
import { CharacterCard } from '../STRETCH_Cards/CharacterCard';
import './FeedComponent.css';

// TODO - make sure FeedComponent is expecting the right props!
export const FeedComponent = ({ApiInfo}) => {

    return <div className={'feed'}>
        {/* TODO - add a placeholder for an empty feed */}
        {/* TODO - build up a list of results */}
        {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}
        I'm the feed component
    <CharacterCard ApiInfo = {ApiInfo}/>    
    </div>
};