import React, { useRef } from 'react'
import {
    Button,
    Field,
    HiddenField,
    Panel,
    PanelWrapper
}                        from './Elements'
import {
    bpmToMs,
    maxStagger
}                        from './utils'
import { client }        from './App'

const Controls = ({config, setConfig, setValues, values}) => {
    const textRef = useRef(null)

    const {
        dimensions,
        squareSize,
        interval,
        bpm,
        note,
        isColor,
        isDark,
        isUpdating,
        isSkewed,
        stagger,
        incoming,
        isStaggered,
        isReversed,
        isController
    } = config

    const toggleRandomize = () => setConfig(config => ({...config, isUpdating: !config.isUpdating}))

    const copyToClipboard = () => {
        textRef.current.select()
        document.execCommand('copy')
    }

    const processInput = () => {
        const newLayout = JSON.parse(incoming)

        if (Array.isArray(newLayout) && newLayout.length === dimensions ^ 2)
            setValues(newLayout)
    }

    const handlePush = () => {
        client.send(JSON.stringify({
            ...config,
            isController: false
        }))
    }

    return (
        <PanelWrapper>
            <Panel>
                <select
                    onChange={e => setConfig(config => ({...config, method: e.target.value}))}
                    defaultValue="collection"
                >
                    <option value="single">single</option>
                    <option value="all">all</option>
                    <option value="collection">collection</option>
                    <option value="sequence">sequence</option>
                </select>
                <Button onClick={toggleRandomize}>Updating:<br/>{isUpdating ? 'on' : 'off'}</Button>
                <HiddenField id="copyarea" ref={textRef} value={JSON.stringify(values).trim()} readOnly/>
                <Button onClick={copyToClipboard}>Copy</Button>
                <div>
                    <div>
                        Dimensions:
                        <Field
                            onChange={e => setConfig(config => ({...config, dimensions: e.target.value}))}
                            value={dimensions}
                            type="number"
                        />
                    </div>
                    <div>
                        Square Size:
                        <Field
                            onChange={e => setConfig(config => ({...config, squareSize: e.target.value}))}
                            value={squareSize}
                            type="number"
                        />
                    </div>
                    <div>
                        Interval:
                        <Field
                            onChange={e => setConfig(config => ({...config, interval: e.target.value}))}
                            value={interval}
                            type="number"
                        />
                        ms
                    </div>
                    <div>
                        BPM:
                        <Field
                            onChange={e => setConfig(config => ({
                                ...config,
                                bpm: e.target.value,
                                interval: bpmToMs(e.target.value, note),
                                stagger: Math.min(stagger, maxStagger(bpmToMs(e.target.value, note), dimensions))
                            }))}
                            value={bpm}
                            type="number"
                        />
                    </div>
                    <div>
                        Note:
                        <select
                            onChange={e => setConfig(config => ({
                                ...config,
                                note: Number(e.target.value),
                                interval: bpmToMs(bpm, Number(e.target.value)),
                                stagger: Math.min(stagger, maxStagger(bpmToMs(bpm, Number(e.target.value)), dimensions))
                            }))}
                            defaultValue={1}
                        >
                            <option value={1}>whole</option>
                            <option value={.5}>half</option>
                            <option value={.25}>quarter</option>
                        </select>
                    </div>
                    <div>
                        Stagger:
                        <Field
                            onChange={e => setConfig(config => ({...config, stagger: e.target.value}))}
                            value={stagger}
                            type="number"
                        />
                        ms
                    </div>
                    <div>
                        Color:
                        <Field
                            onChange={() => setConfig(config => ({...config, isColor: !config.isColor}))}
                            value={isColor}
                            type="checkbox"
                        />
                    </div>
                    <div>
                        Dark Mode:
                        <Field
                            onChange={() => setConfig(config => ({...config, isDark: !config.isDark}))}
                            value={isDark}
                            type="checkbox"
                        />
                    </div>
                    <div>
                        Staggered:
                        <Field
                            onChange={() => setConfig(config => ({
                                ...config,
                                isStaggered: !config.isStaggered
                            }))}
                            value={isStaggered}
                            type="checkbox"
                        />
                    </div>
                    <div>
                        Reversed:
                        <Field
                            onChange={() => setConfig(config => ({
                                ...config,
                                isReversed: !config.isReversed
                            }))}
                            value={isReversed}
                            type="checkbox"
                        />
                    </div>
                    <div>
                        Skewed:
                        <Field
                            onChange={() => setConfig(config => ({
                                ...config,
                                isSkewed: !config.isSkewed
                            }))}
                            value={isSkewed}
                            type="checkbox"
                        />
                    </div>
                    <div>
                        Input:
                        <Field
                            onChange={e => setConfig(config => ({...config, incoming: e.target.value}))}
                            value={incoming}
                            type="text"
                        />
                    </div>
                    <div>
                        <Button onClick={processInput}>Submit</Button>
                    </div>
                    <div>
                        Controller:
                        <Field
                            onChange={() => setConfig(config => ({
                                ...config,
                                isController: !config.isController
                            }))}
                            value={isController}
                            type="checkbox"
                        />
                    </div>
                    <div>
                        Mode:
                        <select
                            defaultValue={0}
                            onChange={e => {
                                switch (e) {
                                    case 0:
                                    default:
                                        return setConfig(config => ({
                                            ...config,
                                            isController: false,
                                            isListener: false
                                        }))
                                    case 1:
                                        return setConfig(config => ({
                                            ...config,
                                            isController: false,
                                            isListener: true
                                        }))
                                    case 2:
                                        return setConfig(config => ({
                                            ...config,
                                            isController: true,
                                            isListener: false
                                        }))
                                }
                            }}
                        >
                            <option value={0}>Normal</option>
                            <option value={1}>Listener</option>
                            <option value={2}>Controller</option>
                        </select>
                    </div>
                    {isController && (
                        <div>
                            <Button onClick={() => handlePush()}>Push Settings</Button>
                        </div>
                    )}
                </div>
            </Panel>
        </PanelWrapper>
    )
}

export default Controls