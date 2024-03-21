class c_Enemy 
{
    constructor(l_x, l_y) 
    {
        this.Enemy_Xpos = l_x;
        this.Enemy_Ypos = l_y;
        this.Enemy_Move_Speed = parseInt(Math.random() * (15 - 5) + 5);
        this.Enemy_Radius = parseInt(Math.random() * (80 - 20) + 20);
    }
    m_draw_Enemy(l_context) 
    {
        l_context.fillStyle = "rgba(239,204,38,255)";
        l_context.beginPath();
        l_context.arc(this.Enemy_Xpos, this.Enemy_Ypos, this.Enemy_Radius, 0, 2 * Math.PI);
        l_context.closePath();
        l_context.fill();
    }
}