import React, { useState } from "react";

import StatusBtn from "../btns/StatusBtn";
import StatusSelector from "../status_selector/StatusSelector";
import IssueOptions from "./IssueOptions";

import PropTypes from "prop-types";

import "./issue.css";

export const Issue = ({ id, description, completion, priority, stage }) => {
    const [showPriorities, setPriorities] = useState(false);
    const [showStages, setStages] = useState(false);
    const [showIssueOptions, setIssueOptions] = useState(false);
    const [showDateOptions, setDateOptions] = useState(false);

    const stageId = `stage-${id}`;
    const priorityId = `priority-${id}`;

    return (
        <div className='issue-container'>
            <div className='issue-description-container'>
                <div className='issue-description'>{description}</div>
                <i
                    className='issue-menu fas fa-ellipsis-v'
                    title='Options'
                    onClick={() => setIssueOptions(true)}></i>
                <div className='issue-options-temp-container'>
                    {showIssueOptions && (
                        <IssueOptions
                            containerName='issue-options-container'
                            displayOptions={setIssueOptions}
                            options={["New Issue", "Edit", "Delete", "Notes"]}
                        />
                    )}
                </div>
            </div>
            <div className='issue-state-btn-container'>
                {showStages && (
                    <StatusSelector status='stage' onClick={setStages} />
                )}
                <StatusBtn
                    id={stageId}
                    value={stage}
                    onClick={() => {
                        setStages(true);
                        setPriorities(false);
                    }}
                />
                {showPriorities && (
                    <StatusSelector status='priority' onClick={setPriorities} />
                )}
                <StatusBtn
                    id={priorityId}
                    value={priority}
                    onClick={() => {
                        setPriorities(true);
                        setStages(false);
                    }}
                />
            </div>
            <div className='date-container'>
                <div className='completion-date'>{completion}</div>
                <i
                    className='issue-menu fas fa-ellipsis-v'
                    title='Date options'
                    onClick={() => setDateOptions(true)}></i>
                <div className='date-options-temp-container'>
                    {showDateOptions && (
                        <IssueOptions
                            containerName='date-options-container'
                            displayOptions={setDateOptions}
                            options={["Edit", "Delete"]}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

Issue.propTypes = {
    id: PropTypes.string,
    description: PropTypes.string,
    completion: PropTypes.string,
    priority: PropTypes.string,
    stage: PropTypes.string,
};

export default Issue;
