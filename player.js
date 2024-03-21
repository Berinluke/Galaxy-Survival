class c_Player 
{
    constructor(l_x, l_y) 
    {
        this.Player_Xpos = l_x;
        this.Player_Ypos = l_y;
        this.Player_Radius = 50;
        this.Barrel_Width = 25;
        this.Barrel_Height = 50;
        this.Player_Color = "rgba(239,204,38,255)";
        this.Barrel_Color = "#983122";
        this.Center_Knob = "#918a8a";
        this.temp_angle_deg = 0;
        this.stop_Barrel_flag = 0;
        this.end_flag = 0;
        this.rotateSpeed = 15;
        this.angle_deg = 270;
        this.rotate_Left_flag = 0;
        this.rotate_Right_flag = 0;
        this.bullet = new c_Bullet(this.Player_Xpos, this.Player_Ypos, this.Barrel_Width / 2);
    }
    m_draw_Tank(l_context) 
    {
        //tank base
        l_context.fillStyle = this.Player_Color;
        l_context.beginPath();
        l_context.arc(this.Player_Xpos, this.Player_Ypos, this.Player_Radius, 0, 2 * Math.PI);
        l_context.fill();
        l_context.closePath();
        if (this.stop_Barrel_flag == 0) 
        {
            this.bullet.m_draw_Bullet(l_context);
            //barrel
            l_context.save();
            l_context.translate(this.Player_Xpos, this.Player_Ypos);
            l_context.rotate(Math.PI * this.angle_deg / 180);
            l_context.fillStyle = this.Barrel_Color;
            l_context.fillRect(-(this.Barrel_Width / 2), 0, this.Barrel_Width, this.Barrel_Height);
            l_context.restore();
            //barrel knob
            l_context.fillStyle = this.Center_Knob;
            l_context.beginPath();
            l_context.arc(this.Player_Xpos, this.Player_Ypos, this.Barrel_Width / 2, 0, 2 * Math.PI);
            l_context.fill();
            l_context.closePath();
        }
    }
    m_Player_Border_Collision(l_canvas) 
    {
        if ((this.Player_Xpos + this.Player_Radius) > l_canvas.width || (this.Player_Xpos - this.Player_Radius) < 0 || (this.Player_Ypos + this.Player_Radius) > l_canvas.height || (this.Player_Ypos - this.Player_Radius) < 0) 
        {
            this.stop_Barrel_flag = 1;
            this.end_flag = 1;
        }
    }
    m_Barrel_Rotation() {
        if (this.rotate_Left_flag == 1) 
        {
            this.angle_deg -= this.rotateSpeed;
        }
        if (this.rotate_Right_flag == 1) 
        {
            this.angle_deg += this.rotateSpeed;
        }
        console.log(this.angle_deg);
    }
    m_Shoot_Bullet() {
        if (this.bullet.Start_animat_flag == 0) 
        {
            this.temp_angle_deg = this.angle_deg;
        }
        var Shoot_Angle = (this.temp_angle_deg * (Math.PI)) / 180;
        this.bullet.Xpos_Bullet_Movement = this.bullet.Initial_velocity * Math.sin(Shoot_Angle);
        this.bullet.Ypos_Bullet_Movement = this.bullet.Initial_velocity * Math.cos(Shoot_Angle);               
    }
}