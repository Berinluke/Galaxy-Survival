class c_Bullet 
{
    constructor(l_x, l_y, l_Radius) 
    {
        this.Bullet_xpos = l_x;
        this.Bullet_ypos = l_y;
        this.Bullet_radius = l_Radius;
        this.overall_Speed = 100;
        this.Bullet_color = "rgb(0, 0, 0)";
        this.Initial_velocity = this.overall_Speed;
        this.Xpos_Bullet_Movement = this.overall_Speed;
        this.Ypos_Bullet_Movement = this.overall_Speed;
        this.Start_animat_flag = 0;
    }
    m_draw_Bullet(l_context) 
    {
        l_context.fillStyle = this.Bullet_color;
        l_context.beginPath();
        l_context.arc(this.Bullet_xpos, this.Bullet_ypos, this.Bullet_radius, 0, 2 * Math.PI);
        l_context.closePath();
        l_context.fill();
    }
    m_CircleBorderCollision(l_canvas) 
    {
        if ((this.Bullet_xpos + this.Bullet_radius) > l_canvas.width || (this.Bullet_xpos - this.Bullet_radius) < 0 || (this.Bullet_ypos + this.Bullet_radius) > l_canvas.height || (this.Bullet_ypos - this.Bullet_radius) < 0) {
            this.Start_animat_flag = 0;
            this.Bullet_xpos = l_canvas.width / 2;
            this.Bullet_ypos = l_canvas.height / 2;
        }
    }
    m_movement() 
    {
        if (this.Start_animat_flag == 1) 
        {
            this.Bullet_xpos -= this.Xpos_Bullet_Movement;
            this.Bullet_ypos += this.Ypos_Bullet_Movement;
        }
    }
}