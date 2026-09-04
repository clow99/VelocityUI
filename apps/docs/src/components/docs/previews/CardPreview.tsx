"use client";
import { useState } from "react";
import {
  Card,
  Button,
  Badge,
  Avatar,
  Progress,
  Dialog,
} from "@velocityuikit/velocityui";
import { Icon } from "@/components/Icon";

export function CardPreview() {
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewed, setReviewed] = useState(false);
  const [following, setFollowing] = useState(false);
  return (
    <div className="component-studies">
      <div className="study-grid">
        <Card variant="bordered" className="project-study">
          <div className="project-cover" aria-hidden="true">
            <div className="cover-window">
              <span className="cover-dots">● ● ●</span>
              <div className="cover-shapes">
                <i />
                <i />
                <i />
              </div>
              <div className="cover-lines">
                <i />
                <i />
              </div>
              <span className="cover-cursor">
                <Icon name="arrow" size={14} /> Make it yours
              </span>
            </div>
            <span className="cover-caption">GOOD IDEAS START SOMEWHERE</span>
          </div>
          <Card.Body>
            <div className="study-heading">
              <span className="study-symbol">
                <Icon name="layers" />
              </span>
              <Badge
                variant={reviewed ? "success" : "info"}
                appearance="soft"
                dot
              >
                {reviewed ? "Ready to ship" : "In progress"}
              </Badge>
            </div>
            <h3>Interface, thoughtfully made.</h3>
            <p className="study-description">
              A shared foundation for your team's next great product.
            </p>
            <div className="study-progress">
              <span>Release checklist</span>
              <strong>{reviewed ? "8" : "6"} / 8</strong>
            </div>
            <Progress value={reviewed ? 100 : 75} />
            <div className="study-footer">
              <Avatar.Group size="sm">
                <Avatar name="Maya Chen" />
                <Avatar name="Alex Morgan" />
                <Avatar name="Sam Rivera" />
              </Avatar.Group>
              <span>
                {reviewed ? "Review complete" : "3 people collaborating"}
              </span>
            </div>
          </Card.Body>
          <Card.Footer>
            <Button
              type="button"
              fullWidth
              variant={reviewed ? "soft" : "primary"}
              rightIcon={<Icon name={reviewed ? "check" : "arrow"} size={16} />}
              onClick={() => setReviewOpen(true)}
            >
              {reviewed ? "View review" : "Review changes"}
            </Button>
          </Card.Footer>
        </Card>
        <Card variant="elevated" className="profile-study">
          <div className="profile-cover" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <Card.Body>
            <div className="profile-avatar">
              <Avatar
                name="Maya Chen"
                tone="violet"
                size="xl"
                status="online"
                ring
              />
            </div>
            <div className="study-heading">
              <div>
                <h3>Maya Chen</h3>
                <p className="study-description">
                  Product designer & detail person.
                </p>
              </div>
            </div>
            <p className="profile-bio">
              Making useful things feel effortless. Currently exploring the
              space between design and code.
            </p>
            <div className="study-row">
              <Badge appearance="outline">Design systems</Badge>
              <Badge appearance="outline">Prototyping</Badge>
            </div>
            <div className="profile-stats">
              <div>
                <strong>24</strong>
                <span>Projects</span>
              </div>
              <div>
                <strong>{following ? "1,205" : "1,204"}</strong>
                <span>Followers</span>
              </div>
              <div>
                <strong>86</strong>
                <span>Following</span>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <Button
              type="button"
              fullWidth
              variant={following ? "soft" : "outline"}
              aria-pressed={following}
              leftIcon={<Icon name={following ? "check" : "plus"} size={16} />}
              onClick={() => setFollowing(!following)}
            >
              {following ? "Following Maya" : "Follow Maya"}
            </Button>
          </Card.Footer>
        </Card>
      </div>
      <Dialog
        open={reviewOpen}
        onClose={() => setReviewOpen(false)}
        title="The details are ready"
        description="A preview of a release review, built with the same components."
      >
        <Dialog.Body>
          <div className="study-checklist">
            {[
              "Components match the design system",
              "Keyboard and mobile checks complete",
              "Documentation is ready for the team",
            ].map((item) => (
              <div key={item}>
                <Icon name="check" size={18} />
                {item}
              </div>
            ))}
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <Button
            onClick={() => {
              setReviewed(true);
              setReviewOpen(false);
            }}
          >
            Mark as reviewed
          </Button>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}
