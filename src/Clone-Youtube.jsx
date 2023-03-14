import React from "react";

import YoutubeLogo from "./components/YoutubeLogo.component";
import Form from "./components/Form.component";
import Input from "./components/Input.component";
import Button from "./components/Button.component";

const CloneYoutube = () => {
    return (
        <>
            <div className="container">
                <header className="navbar navbar-expand navbar-light bg-light row my-3">
                    <YoutubeLogo />
                    <Form className={`d-flex mx-auto`}>
                        <Input
                            className="form-control col-md-12"
                            name="search"
                            type="text"
                            placeholder="search..."
                        />
                        <Button type="submit" className="btn btn-outline-success " text="Search" />
                    </Form>
                </header>
            </div>
        </>
    );
};

export default CloneYoutube;
