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

export const ApplyOfficer = () => {

    const [tab, setTab] = useState('description')

    return (
        <div className="apply mt_50">
            <div className="font_18"><T>applyOfficer.label.0</T></div>
            <div className="font_30 font_bold"><T>applyOfficer.title.0</T></div>
            <div className="font_15"><T>applyOfficer.label.1</T><T>applyOfficer.label.2</T></div>
            <div className={`description ${tab === 'description' ? 'active' : ''}`}>
                <div className="font_20 font_600 mt_20">
                    <T>applyOfficer.text.0</T>
                </div>
                <div className="font_20 font_600">
                    <T>applyOfficer.text.1</T>
                </div>
                <div className="font_20 font_600">
                    <T>applyOfficer.text.2</T>
                </div>
                <div className="font_20 font_600">
                    <T>applyOfficer.text.3</T>
                </div>
                <div className="font_20 font_600 mt_20">
                    <T>applyOfficer.text.4</T>
                </div>
                <div className="font_20 font_600 mt_20">
                    <T>applyOfficer.text.5</T>
                </div>
                <div className="font_20 font_600 mt_40">
                    <T>applyOfficer.terms.0.title</T>
                </div>
                <ul className="ml_50 mt_20">
                    <li>
                        <T>applyOfficer.terms.0.text.0</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.0.text.1</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.0.text.2</T>
                    </li>
                </ul>
                <div className="font_20 font_600 mt_40">
                    <T>applyOfficer.terms.1.title</T>
                </div>
                <ul className="ml_50 mt_20">
                    <li>
                        <T>applyOfficer.terms.1.text.0</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.1.text.1</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.1.text.2</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.1.text.3</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.1.text.4</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.1.text.5</T>
                    </li>
                </ul>
                <div className="font_20 font_600 mt_40">
                    <T>applyOfficer.terms.2.title</T>
                </div>
                <ul className="ml_50 mt_20">
                    <li>
                        <T>applyOfficer.terms.2.text.0</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.2.text.1</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.2.text.2</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.2.text.3</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.2.text.4</T>
                    </li>
                </ul>
                <div className="font_20 font_600 mt_40">
                    <T>applyOfficer.terms.3.title</T>
                </div>
                <ul className="ml_50 mt_20">
                    <li>
                        <T>applyOfficer.terms.3.text.0</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.3.text.1</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.3.text.2</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.3.text.3</T>
                    </li>
                </ul>
                <div className="font_20 font_600 mt_40">
                    <T>applyOfficer.terms.4.title</T>
                </div>
                <ul className="ml_50 mt_20">
                    <li>
                        <T>applyOfficer.terms.4.text.0</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.4.text.1</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.4.text.2</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.4.text.3</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.4.text.4</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.4.text.5</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.4.text.6</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.4.text.7</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.4.text.8</T>
                    </li>
                    <li>
                        <T>applyOfficer.terms.4.text.9</T>
                    </li>
                </ul>
                <div className="font_20 font_600 mt_20">
                    <T>applyOfficer.text.6</T>
                    <a href="mailto:hr@plasbit.com"><T>applyOfficer.text.7</T></a>
                    <T>applyOfficer.text.8</T>
                    <a href="mailto:hr@plasbit.com"><T>applyOfficer.text.9</T></a>
                    <T>applyOfficer.text.10</T>
                </div>
                <div className="font_20 font_600 mt_20"><T>applyOfficer.title.1</T></div>
                <div className="font_20 font_600">
                    <T>applyOfficer.text.11</T>
                </div>
                <button className="btn active mt_50 ml_auto mr_auto" onClick={() => setTab('appy_form')}>Apply Now</button>
            </div>
            <div className={`appy_form ${tab === 'appy_form' ? 'active' : ''}`}>
                <div className="font_25 font_600">
                    <T>applyOfficer.form.title</T>
                </div>
                <div className="font_15 mt_10 mb_30">* <T>applyOfficer.form.required</T></div>
                <Form {...layout} name="control-ref" onFinish={() => console.log('called onFinish')}>
                    <Form.Item name="firstName" label={<T>applyOfficer.form.label.0</T>} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="lastName" label={<T>applyOfficer.form.label.1</T>} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label={<T>applyOfficer.form.label.2</T>} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="location" label={<T>applyOfficer.form.label.3</T>}>
                        <Input placeholder="Address" />
                        <Input placeholder="City" style={{ display: 'inline-block', width: '50%', marginTop: 10 }} />
                        <Input placeholder="State" style={{ display: 'inline-block', width: '23%', marginLeft: '1%', marginTop: 10 }} />
                        <Input placeholder="Postal" style={{ display: 'inline-block', width: '25%', marginLeft: '1%', marginTop: 10 }} />
                    </Form.Item>
                    <Form.Item name="phone" label={<T>applyOfficer.form.label.4</T>} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="resume" label={<T>applyOfficer.form.label.5</T>}
                        valuePropName="fileList"
                        rules={[{ required: true }]}
                        getValueFromEvent={normFile}
                    >
                        <Upload name="logo" action="/#" listType="pdf">
                            <Button icon={<UploadOutlined />}><T>applyOfficer.form.button.0</T></Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            <T>applyOfficer.form.button.1</T>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export { ApplyOfficer as default } from './ApplyOfficer'
