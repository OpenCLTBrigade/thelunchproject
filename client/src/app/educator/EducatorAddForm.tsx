import { h } from 'preact'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const TeacherAddForm = () =>
    //form from alex branch
    <Form>
        <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input type="text" id="firstName" placeholder="First Name" required />
        </FormGroup>
        <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input type="text" id="lastName" placeholder="Last Name" required />
        </FormGroup>
        <FormGroup>
            <Label for="email">Email address</Label>
            <Input type="email" id="email" placeholder="Email Address" required />
        </FormGroup>
        <FormGroup>
            <Label for="school">School</Label>
            <Input type="text" id="school" placeholder="School" required />
        </FormGroup>
        <FormGroup>
            <Label for="grade-level">Grade Level</Label>
            <Input type="text" id="grade-level" placeholder="Grade Level" required />
        </FormGroup>
        <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" id="username" placeholder="Username" />
        </FormGroup>
        <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
        </FormGroup>
        <div className="checkbox">
            <label>
                <input type="checkbox" />Remember me
            </label>
        </div>
        <Button type="submit" color="primary">
            Submit
        </Button>
    </Form>

export default TeacherAddForm
