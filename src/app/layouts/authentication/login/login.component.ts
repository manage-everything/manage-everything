import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public username;
  password;
  constructor(public router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    this.username = "";
    this.password = "";
  }

  login() {
    if (this.username == "9623950123" && this.password == "Admin@123") {
      this.toastr.success("Logged In Successfully...!");
      this.router.navigate(["/modules/dashboard"]);
    } else {
      this.toastr.error("Invalid credentials");
    }
  }
}
