import React, { useState } from 'react'
import { Form, Button, Input, Upload } from 'antd';
import UploadOutlined from '@ant-design/icons/UploadOutlined';
import { Trans as T } from 'react-i18next';

import './Apply.css';

const layout = {
    wrapperCol: { span: 16 },
    layout: 'vertical'
};

const tailLayout = {
    wrapperCol: { span: 16 },
};

const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

export const ApplyReact = () => {

    const [tab, setTab] = useState('description')

    return (
        <div className="apply mt_50">
            <div className="font_18"><T>applyReact.label.0</T></div>
            <div className="font_30 font_bold"><T>applyReact.title.0</T></div>
            <div className="font_15"><T>applyReact.label.1</T><T>applyReact.label.2</T></div>
            <div className={`description ${tab === 'description' ? 'active' : ''}`}>
                <div className="font_20 font_600 mt_20">
                    <T>applyReact.text.0</T>
                </div>
                <div className="font_20 font_600">
                    <T>applyReact.text.1</T>
                </div>
                <div className="font_20 font_600">
                    <T>applyReact.text.2</T>
                </div>
                <div className="font_20 font_600">
                    <T>applyReact.text.3</T>
                </div>
                <div className="font_20 font_600">
                    <T>applyReact.text.4</T>
                </div>
                <div className="font_20 font_600">
                    <T>applyReact.text.5</T>
                </div>
                <div className="font_20 font_600">
                    <T>applyReact.text.6</T>
                </div>
                <div className="font_20 font_600 mt_40">
                    <T>applyReact.terms.0.title</T>
                </div>
                <ul className="ml_50 mt_20">
                    <li>
                        <T>applyReact.terms.0.text.0</T>
                    </li>
                    <li>
                        <T>applyReact.terms.0.text.1</T>
                    </li>
                    <li>
                        <T>applyReact.terms.0.text.2</T>
                    </li>
                    <li>
                        <T>applyReact.terms.0.text.3</T>
                    </li>
                    <li>
                        <T>applyReact.terms.0.text.4</T>
                    </li>
                    <li>
                        <T>applyReact.terms.0.text.5</T>
                    </li>
                    <li>
                        <T>applyReact.terms.0.text.6</T>
                    </li>
                    <li>
                        <T>applyReact.terms.0.text.7</T>
                    </li>
                    <li>
                        <T>applyReact.terms.0.text.8</T>
                    </li>
                    <li>
                        <T>applyReact.terms.0.text.9</T>
                    </li>
                </ul>
                <div className="font_20 font_600 mt_40">
                    <T>applyReact.terms.1.title</T>
                </div>
                <ul className="ml_50 mt_20">
                    <li>
                        <T>applyReact.terms.1.text.0</T>
                    </li>
                    <li>
                        <T>applyReact.terms.1.text.1</T>
                    </li>
                    <li>
                        <T>applyReact.terms.1.text.2</T>
                    </li>
                    <li>
                        <T>applyReact.terms.1.text.3</T>
                    </li>
                    <li>
                        <T>applyReact.terms.1.text.4</T>
                    </li>
                    <li>
                        <T>applyReact.terms.1.text.5</T>
                    </li>
                    <li>
                        <T>applyReact.terms.1.text.6</T>
                    </li>
                    <li>
                        <T>applyReact.terms.1.text.7</T>
                    </li>
                    <li>
                        <T>applyReact.terms.1.text.8</T>
                    </li>
                    <li>
                        <T>applyReact.terms.1.text.9</T>
                    </li>
                    
                </ul>
                <div className="font_20 font_600 mt_20">
                    <T>applyReact.text.7</T>
                    <a href="mailto:hr@plasbit.com"><T>applyReact.text.8</T></a>
                    <T>applyReact.text.9</T>
                    <a href="mailto:hr@plasbit.com"><T>applyReact.text.10</T></a>
                    <T>applyReact.text.11</T>
                </div>
                <div className="font_20 font_600 mt_20"><T>applyReact.title.1</T></div>
                <div className="font_20 font_600">
                    <T>applyReact.text.12</T>
                </div>
                <button className="btn active mt_50 ml_auto mr_auto" onClick={() => setTab('appy_form')}>Apply Now</button>
            </div>
            <div className={`appy_form ${tab === 'appy_form' ? 'active' : ''}`}>
                <div className="font_25 font_600">
                    <T>applyReact.form.title</T>
                </div>
                <div className="font_15 mt_10 mb_30">* <T>applyReact.form.required</T></div>
                <Form {...layout} name="control-ref" onFinish={() => console.log('called onFinish')}>
                    <Form.Item name="firstName" label={<T>applyReact.form.label.0</T>} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="lastName" label={<T>applyReact.form.label.1</T>} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label={<T>applyReact.form.label.2</T>} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="location" label={<T>applyReact.form.label.3</T>}>
                        <Input placeholder="Address" />
                        <Input placeholder="City" style={{ display: 'inline-block', width: '50%', marginTop: 10 }} />
                        <Input placeholder="State" style={{ display: 'inline-block', width: '23%', marginLeft: '1%', marginTop: 10 }} />
                        <Input placeholder="Postal" style={{ display: 'inline-block', width: '25%', marginLeft: '1%', marginTop: 10 }} />
                    </Form.Item>
                    <Form.Item name="phone" label={<T>applyReact.form.label.4</T>} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="resume" label={<T>applyReact.form.label.5</T>}
                        valuePropName="fileList"
                        rules={[{ required: true }]}
                        getValueFromEvent={normFile}
                    >
                        <Upload name="logo" action="/#" listType="pdf">
                            <Button icon={<UploadOutlined />}><T>applyReact.form.button.0</T></Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            <T>applyReact.form.button.1</T>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export { ApplyReact as default } from './ApplyReact'
